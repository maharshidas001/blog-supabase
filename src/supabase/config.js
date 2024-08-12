import { supabaseClient } from "./client";

class SupabseService {
  getAllPosts = async () => {
    try {
      const { data, error } = await supabaseClient.from('articles').select('*').eq('status', true);
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getPostById = async (slug) => {
    try {
      const { data, error, } = await supabaseClient.from('articles').select('*').eq('slug', slug);
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getPostsByAuthor = async (authorId) => {
    try {
      const { data, error } = await supabaseClient.from('articles').select('*').eq('authorId', authorId);
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  createPost = async ({ title, slug, content, authorId, image, authorName }) => {
    try {
      const { data, error } = await supabaseClient.from('articles').insert({
        title,
        slug,
        content,
        authorId,
        image,
        authorName
      }).select();
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  updatePost = async (slug, { title, content, image }) => {
    try {
      const { data, error } = await supabaseClient.from('articles').update({
        title, content, image
      }).eq('slug', slug);
      if (error) {
        console.log('Update Post' + error);
        throw new Error(error);
      } return data;
    } catch (error) {
      console.log('Update Post' + error);
      throw new Error(error);
    }
  };

  deletePost = async (slug) => {
    try {
      const { status, error } = await supabaseClient.from('articles').delete().eq('slug', slug);
      if (error) {
        throw new Error(error);
      } return data;
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
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getImageUrl = ({ imagePath }) => {
    const { data } = supabaseClient.storage.from('images').getPublicUrl(imagePath);
    return data;
  };

  deleteFile = async ({ file }) => {
    try {
      const { data, error } = await supabaseClient.storage.from('images').remove([`postimages/${file.name}`]);
      if (error) {
        throw new Error(error);
      } return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}

const supabaseService = new SupabseService();

export default supabaseService;