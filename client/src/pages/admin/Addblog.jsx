import React, { useEffect, useState, useRef } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';

const Addblog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [description, setDescription] = useState(''); // ✅ new state for content

  // AI Content Generator (placeholder)
  const generateContent = async (e) => {
    e.preventDefault();
    // Example: just setting sample text
    const generatedText = "This is AI generated blog description...";
    quillRef.current.root.innerHTML = generatedText;
    setDescription(generatedText);
  };

  // Submit Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      subTitle,
      category,
      isPublished,
      description,
      image,
    };

    console.log("Blog Submitted:", blogData);
    // You can now send blogData to backend (API call)
  };

  useEffect(() => {
    // Initiate Quill once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });

      // Listen to text changes
      quillRef.current.on('text-change', () => {
        setDescription(quillRef.current.root.innerHTML);
      });
    }

    // Cleanup image URL
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        
        {/* Upload Thumbnail */}
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="Upload Thumbnail"
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            type="file"
            hidden
            required
          />
        </label>

        {/* Blog Title */}
        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        {/* Sub Title */}
        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* Blog Description */}
        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-80 pb-16 sm:pb-10 pt-2 relative">
          <div
            className="border rounded h-full bg-gray-50 text-gray-400"
            ref={editorRef}
          ></div>

          <button
            type="button"
            className="absolute bottom-2 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>

        {/* Category Selection */}
        <p className="mt-4">Blog category</p>
        <select
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        {/* Publish Toggle */}
        <div className="flex gap-2 mt-4">
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="scale-125 cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default Addblog;
