import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion, AnimatePresence } from "motion/react"
import BlogCard from './BlogCard'

const BlogList = () => {
  const [menu, setMenu] = useState("All")

  const filteredBlogs = blog_data.filter(
    (blog) => menu === "All" || blog.category === menu
  )

  return (
    <div>
      {/* Category Menu */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer transition-colors px-4 py-1 rounded-full 
                ${menu === item 
                  ? 'bg-primary text-white font-semibold' 
                  : 'text-gray-500 hover:text-primary'}`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute inset-0 -z-10 bg-primary rounded-full'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blogs available in <span className="font-semibold">{menu}</span>.
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default BlogList
