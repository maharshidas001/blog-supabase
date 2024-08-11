import { supabaseClient } from "./client";

class SupabseService {
  getAllPosts = async () => {
    try {
      const { data, error, status } = await supabaseClient.from('articles').select('*');
      if (data && status == 200) {
        return data;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getPostById = async (slug) => {
    try {
      const { data, error, status } = await supabaseClient.from('articles').select('*').eq('slug', slug);
      if (data && status == 200) {
        return data;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getPostsByAuthor = async (authorId) => {
    try {
      const { data, error, status } = await supabaseClient.from('articles').select('*').eq('authorId', authorId);
      if (data && status == 200) {
        return data;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  createPost = async ({ title, slug, content, authorId, image }) => {
    try {
      const { data, status, error } = await supabaseClient.from('articles').insert({
        title,
        slug,
        content,
        authorId,
        image
      }).select();
      if (data && status == 201) {
        return data;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  updatePost = async (slug, { title, content, image }) => {
    try {
      const { status, error } = await supabaseClient.from('articles').update({
        title, content, image
      }).eq('slug', slug);
      if (status == 204) {
        return true;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  deletePost = async (slug) => {
    try {
      const { status, error } = await supabaseClient.from('articles').delete().eq('slug', slug);
      if (status == 204) {
        return true;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

const supabaseService = new SupabseService();

export default supabaseService;