<?php

namespace App\Controller;

use App\Entity\Product;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;

class ProductController extends AbstractController
{
    /**
     * @Route("/products", name="add_product", methods={"POST"})
     */
    public function addProduct(Request $request,  PersistenceManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $entityManager = $doctrine->getManager();

        $product = new Product();
        $product->setBg($data['bg']);
        $product->setColor($data['color']);
        $product->setTypeColor($data['typeColor']);
        $product->setType($data['type']);
        $product->setName($data['name']);
        $product->setPays($data['pays']);
        $product->setOldPrice($data['oldPrice']);
        $product->setPrice($data['price']);
        $product->setLink($data['link']);

        $entityManager->persist($product);
        $entityManager->flush();

        return new JsonResponse(['status' => 'Product added!'], JsonResponse::HTTP_CREATED);
    }

    /**
     * @Route("/products", name="get_products", methods={"GET"})
     */

    public function getProducts(PersistenceManagerRegistry $doctrine): JsonResponse
    {

        $products = $this->$doctrine->getRepository(Product::class)->findAll();

        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'bg' => $product->getBg(),
                'color' => $product->getColor(),
                'typeColor' => $product->getTypeColor(),
                'type' => $product->getType(),
                'name' => $product->getName(),
                'pays' => $product->getPays(),
                'oldPrice' => $product->getOldPrice(),
                'price' => $product->getPrice(),
                'link' => $product->getLink(),
            ];
        }

        return new JsonResponse($data, JsonResponse::HTTP_OK);
    }
}
