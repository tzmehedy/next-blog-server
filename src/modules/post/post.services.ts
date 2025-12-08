import { prisma } from "../../config/db";
import { Post, Prisma } from "../../generated/prisma/client";

const createPost = async (
  payload: Prisma.PostCreateInput
): Promise<Partial<Post>> => {
  const createdPost = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
  return createdPost;
};

const getAllPost = async () => {
  const allPosts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });

  return allPosts;
};

const getPostById = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
  return post;
};

const updatePost = async (id: number, payload: Partial<Post>) => {
  const updatedPost = await prisma.post.update({
    where: { id },
    data: payload,
  });
};

const deletePost = async (id: number) => {
  const deletedPost = await prisma.post.delete({
    where: { id },
  });
};

export const postServices = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost
};
