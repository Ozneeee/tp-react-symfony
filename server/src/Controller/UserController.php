<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends AbstractController
{

    /**
     * @Route("/users", name="create_user", methods={"POST"})
     */
    public function createUser(Request $request, PersistenceManagerRegistry $doctrine): Response
    {
        $entityManager = $this->$doctrine()->getManager();

        $userData = json_decode($request->getContent(), true);

        $user = new User();
        $user->setUsername($userData['username']);
        $user->setPassword($userData['password']);

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json(['user' => $user], 201);
    }

    /**
     * @Route("/users", name="get_users", methods={"GET"})
     */
    public function getUsers(PersistenceManagerRegistry $doctrine): JsonResponse
    {
        $userRepository = $this->$doctrine()->getRepository(User::class);
        $users = $userRepository->findAll();

        $usersData = [];
        foreach ($users as $user) {
            $usersData[] = $user->toArray();
        }

        return $this->json(['users' => $usersData]);
    }
}
