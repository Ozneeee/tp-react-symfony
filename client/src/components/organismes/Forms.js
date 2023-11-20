import React, { useState } from "react";
import { Input, Text, Button } from "../atomes";
import { Formik, getIn } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { profile, isLoggedIn, signOut } = useAuth();

  const [formulaire, setFormulaire] = useState("connexion");

  return (
    <div className="m-20 border-2 rounded-md border-[#8C8C8C] bg-slate-300">
      <div className="w-full h-14 flex flex-row justify-around items-center">
        <div
          className="cursor-pointer"
          onClick={() => setFormulaire("connexion")}
        >
          <Text.h3
            textDecoration={formulaire === "connexion" ? "underline" : null}
          >
            Connexion
          </Text.h3>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setFormulaire("inscription")}
        >
          <Text.h3
            textDecoration={formulaire === "inscription" ? "underline" : null}
          >
            Inscription
          </Text.h3>
        </div>
      </div>
      {formulaire === "connexion" ? (
        <div className="mt-4 mb-12">
          {!isLoggedIn ? (
            <Connexion />
          ) : (
            <div>
              <div className="mb-6">
                <Text.h3 align={"center"}>
                  Connecté en tant que {profile.username}
                </Text.h3>
              </div>
              <div>
                <Button.Primary
                  center={true}
                  value={"Se déconnecter"}
                  onClick={() => signOut()}
                />
              </div>
            </div>
          )}
        </div>
      ) : formulaire === "inscription" ? (
        <div className="mt-4 mb-12">
          {!isLoggedIn ? (
            <Inscription />
          ) : (
            <div>
              <div className="mb-6">
                <Text.h3 align={"center"}>
                  Connecté en tant que {profile.username}
                </Text.h3>
              </div>
              <div>
                <Button.Primary
                  center={true}
                  value={"Se déconnecter"}
                  onClick={() => signOut()}
                />
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

const Inscription = () => {
  const { profile, setProfile, storeData, isLoggedIn, setIsLoggedIn, getData } =
    useAuth();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Le nom d'utilisateur est requis"),
    password: Yup.string()
      .trim()
      .min(5, "Le mot de passe doit faire plus de cinq caractères")
      .required("Le mot de passe est requis"),
  });

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userInfo;

  const registerUser = async (values, formikActions) => {
    try {
      const token = values;
      setProfile(token);
      storeData(token);
      setIsLoggedIn(true);
      setUserInfo({ email: "", password: "" });
      navigate("/home");
      console.log("Création utilisateur validé :", token);
      formikActions.setSubmitting(false);
    } catch (error) {
      console.log("Erreur registerUser :", error.message);
    }
  };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={registerUser}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => {
        const { username, password } = values;
        return (
          <div className="px-12 py-6">
            <div className="mb-6">
              <Input.Primary
                value={username}
                error={touched.username ? errors.username : null}
                label="Entrez votre nom d'utilisateur"
                placeholder="user"
                type="text"
                onBlur={handleBlur("username")}
                onChange={handleChange("username")}
              />
            </div>
            <div className="mb-6">
              <Input.Primary
                value={password}
                error={touched.password ? errors.password : null}
                label="Entrez votre mot de passe"
                placeholder="motdepasse"
                type="password"
                onBlur={handleBlur("password")}
                onChange={handleChange("password")}
              />
            </div>
            <div>
              <Button.Primary
                onClick={handleSubmit}
                value="S'inscrire"
                center={true}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

const Connexion = () => {
  const { profile, setProfile, storeData, isLoggedIn, setIsLoggedIn, getData } =
    useAuth();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Le nom d'utilisateur est requis"),
    password: Yup.string()
      .trim()
      .min(5, "Le mot de passe doit faire plus de cinq caractères")
      .required("Le mot de passe est requis"),
  });

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userInfo;

  const registerUser = async (values, formikActions) => {
    try {
      const token = values;
      setProfile(token);
      storeData(token);
      setIsLoggedIn(true);
      setUserInfo({ email: "", password: "" });
      navigate("/home");
      console.log("Création utilisateur validé :", token);
      formikActions.setSubmitting(false);
    } catch (error) {
      console.log("Erreur registerUser :", error.message);
    }
  };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={registerUser}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => {
        const { username, password } = values;
        return (
          <div className="px-12 py-6">
            <div className="mb-6">
              <Input.Primary
                value={username}
                error={touched.username ? errors.username : null}
                label="Entrez votre nom d'utilisateur"
                placeholder="user"
                type="text"
                onBlur={handleBlur("username")}
                onChange={handleChange("username")}
              />
            </div>
            <div className="mb-6">
              <Input.Primary
                value={password}
                error={touched.password ? errors.password : null}
                label="Entrez votre mot de passe"
                placeholder="motdepasse"
                type="password"
                onBlur={handleBlur("password")}
                onChange={handleChange("password")}
              />
            </div>
            <div>
              <Button.Primary
                onClick={handleSubmit}
                value="S'inscrire"
                center={true}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

const Contact = () => {
  const { isLoggedIn, profile } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Merci d'entrer une adresse mail valide")
      .required("Votre adresse mail est obligatoire"),
    message: Yup.string().trim().required("Un message est obligatoire"),
  });

  const [messageInfo, setMessageInfo] = useState({
    email: "",
    message: "",
  });

  const sendMessage = async (values, formikActions) => {
    try {
      const token = values;
      setMessageInfo({ email: "", message: "" });
      navigate("/home");
      console.log("messsage envoyé :", token);
      formikActions.setSubmitting(false);
    } catch (error) {
      console.log("Erreur sendMessage :", error.message);
    }
  };

  return (
    <div>
      <div className="px-12 py-6">
        <Formik
          initialValues={messageInfo}
          validationSchema={validationSchema}
          onSubmit={sendMessage}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => {
            const { email, message } = values;
            return (
              <div className="px-12 py-6">
                <div className="mb-6">
                  <Input.Primary
                    label="Votre nom"
                    value={isLoggedIn ? profile.username : "Anonyme"}
                    placeholder={isLoggedIn ? profile.username : "Anonyme"}
                    type="text"
                    onChange={(value) => console.log(value)}
                  />
                </div>
                <div className="mb-6">
                  <Input.Primary
                    value={email}
                    label="Votre adresse-mail"
                    placeholder="adresse@mail.fr"
                    type="email"
                    error={touched.email ? errors.email : null}
                    onBlur={handleBlur("email")}
                    onChange={handleChange("email")}
                  />
                </div>
                <div className="mb-6">
                  <Input.Primary
                    value={message}
                    label="Votre message"
                    placeholder="Exemple: Demande de rendez-vous dégustation"
                    type="textarea"
                    error={touched.message ? errors.message : null}
                    onBlur={handleBlur("message")}
                    onChange={handleChange("message")}
                  />
                </div>
                <div className="flex flex-row justify-around mt-12">
                  <Button.Primary
                    value="Envoyer"
                    center={true}
                    onClick={handleSubmit}
                  />
                  <Button.Primary
                    value="Retour"
                    center={true}
                    onClick={() => navigate("/home")}
                  />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export { LoginPage, Contact };
