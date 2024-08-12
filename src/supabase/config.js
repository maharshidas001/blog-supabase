import { supabaseClient } from "./client";

class SupabseService {
  getAllPosts = async () => {
    try {
      const { data, error, status } = await supabaseClient.from('articles').select('*').eq('status', true);
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

  createPost = async ({ title, slug, content, authorId, image, status }) => {
    try {
      const { data, status, error } = await supabaseClient.from('articles').insert({
        title,
        slug,
        content,
        authorId,
        image, status
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

  updatePost = async (slug, { title, content, image, status }) => {
    try {
      const { status, error } = await supabaseClient.from('articles').update({
        title, content, image, status
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

  uploadFile = async ({ file }) => {
    try {
      const { data, error } = await supabaseClient.storage.from('images').upload(`postimages/${file.name}`, file, {
        cacheControl: '3600',
        upsert: false
      });
      if (data && data.path) {
        return data;
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getImageUrl = ({ imagePath }) => {
    return supabaseClient.storage.from('images').getPublicUrl(imagePath).publicUrl;
  };
}

const supabaseService = new SupabseService();

export default supabaseService;