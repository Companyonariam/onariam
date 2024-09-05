import { getData } from '../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

export const BlogCard = async () => {
    let blogs;
    try {
        blogs = await getData();

    }
    catch {
        return <p>Error loading blogs.</p>;
    }

    if (blogs.length === 0) {
        return <p>No blogs found.</p>;
    }

    console.log(blogs)

    return (
        <div className='w-full rounded-xl mt-14 flex flex-wrap flex-col '>
            <div className='my-6'>
                <h1 className='text-6xl font-medium mb-5 text-yellow-100'>Dive into <span className='text-teal-600'>Onariam</span>  update and educational content</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    blogs.length > 0 ? (

                        blogs?.map((blog) => (
                            <div className='group bg-yellow-100 hover:bg-teal-600 p-5 text-2xl min-h-12 rounded-2xl flex flex-col items-start justify-between cursor-pointer' key={blog._id}>
                                <h1 className='text-sm font-medium text-teal-600/80 underline underline-offset-4 decoration-dashed mb-4'>
                                    #{blog.categories}
                                </h1>
                                <div className="mb-3 flex flex-row gap-3 [&_*]:shadow-sm w-full">
                                    <div className=" bg-teal-500/70  rounded-full h-2 p-1 w-1/12  transition-allx duration-150 ease-in-out delay-75"></div>
                                    <div className=" bg-teal-500/80  rounded-full h-2 p-1 w-8/12  transition-allx duration-150 ease-in-out delay-75"></div>
                                    <div className=" bg-amber-200  rounded-full h-2 p-1 w-3/12  transition-all  duration-150 ease-in-out delay-75"></div>

                                </div>
                                <div className=''>


                                    <h1 className='text-lg font-medium mb-4 group-hover:text-yellow-100 text-teal-600'>
                                        {blog.name}
                                    </h1>
                                </div>
                                <div className=''>
                                    <div className='group-hover:bg-yellow-100 group-hover:text-teal-600  w-fit rounded-full px-6 py-2 text-sm bg-teal-600 text-yellow-100 '>Read this</div>
                                    {/* <PortableText value={blog.content} /> */}
                                </div>
                                {/* <Image src={blog?.image} alt={blog?.alt} width={250} height={100} className='object-cover rounded-lg' /> */}
                            </div>
                        ))
                    ) : (<div className=''>
                        Error fetching blogs
                    </div>)
                }
            </div>


        </div >
    )
}
