const logo = ({ children, color, align, textDecoration, fontWeight }) => {
  return (
    <h1
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: 32,
        textDecorationLine: textDecoration,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </h1>
  );
};
const h1 = ({ children, color, align, textDecoration }) => {
  return (
    <h1
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: 32,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </h1>
  );
};

const h2 = ({ children, color, align, textDecoration }) => {
  return (
    <h2
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: 26,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </h2>
  );
};

const h3 = ({ children, color, align, textDecoration, fontSize }) => {
  return (
    <h3
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: fontSize || 22,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </h3>
  );
};

const h4 = ({ children, color, align, textDecoration }) => {
  return (
    <h4
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: 18,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </h4>
  );
};

const p = ({
  children,
  color,
  align,
  textDecoration,
  fontSize,
  fontWeight,
}) => {
  return (
    <p
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: fontSize || 12,
        textDecorationLine: textDecoration,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </p>
  );
};

const label = ({ children, color, align, textDecoration, fontSize }) => {
  return (
    <p
      style={{
        color: color || "black",
        textAlign: align || "left",
        fontSize: fontSize || 18,
        fontWeight: 300,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </p>
  );
};

const hint = ({ children, color, align, textDecoration }) => {
  return (
    <p
      style={{
        color: color || "#38C0F1",
        textAlign: align || "left",
        fontSize: 12,
        fontWeight: 300,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </p>
  );
};

const error = ({ children, color, textDecoration, align }) => {
  return (
    <p
      style={{
        color: color || "red",
        textAlign: align || "left",
        fontSize: 14,
        fontWeight: 600,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </p>
  );
};

const placeholder = ({ children, color, textDecoration, fontSize }) => {
  return (
    <p
      style={{
        color: color || "#ABABAB",
        fontSize: fontSize || 14,
        textDecorationLine: textDecoration,
      }}
    >
      {children}
    </p>
  );
};

const price = ({ children, color, textDecoration, fontWeight, fontSize }) => {
  return (
    <p
      style={{
        color: color || "#000",
        fontSize: fontSize || 38,
        textDecorationLine: textDecoration,
        fontWeight: fontWeight || 800,
      }}
    >
      {children}
    </p>
  );
};

export { logo, h1, h2, h3, h4, p, label, hint, error, placeholder, price };
