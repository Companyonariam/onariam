import { getData } from '../../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import { CgEditUnmask, CgLivePhoto } from "react-icons/cg";


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
            <CgEditUnmask className=" stroke-2 stroke-yellow-100 text-teal-500 h-20 w-20 " />

            <div className='my-6'>
                <h1 className='text-6xl font-medium mb-5 text-yellow-100'>Dive into <span className='text-teal-600'>Onariam</span>  update and educational content</h1>
            </div>

            <div className="group-hover:animate-bounce delay-100  absolute -bottom-3 left-3 flex items-center justify-center  ">
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 '>
                {
                    blogs.length > 0 ? (

                        blogs?.map((blog) => (
                            <div className='group hover:bg-yellow-100 bg-teal-600 p-5 text-2xl min-h-12 rounded-2xl flex flex-col items-start justify-between cursor-pointer relative overflow-hidden' key={blog._id}>
                                <h1 className='text-sm font-medium group-hover:text-stone-600 text-amber-200 underline underline-offset-4 decoration-dashed mb-4'>
                                    #{blog.categories}
                                </h1>
                                <div className="mb-3 flex flex-row gap-3 [&_*]:shadow-sm w-full">
                                    <div className=" bg-teal-500/70  rounded-full h-2 p-1 w-1/12  transition-allx duration-150 ease-in-out delay-75"></div>
                                    <div className=" bg-teal-500/80  rounded-full h-2 p-1 w-8/12  transition-allx duration-150 ease-in-out delay-75"></div>
                                    <div className=" bg-amber-200  rounded-full h-2 p-1 w-3/12  transition-all  duration-150 ease-in-out delay-75"></div>

                                </div>
                                <div className=''>


                                    <h1 className='text-lg font-medium mb-4 group-hover:text-teal-600 text-yellow-100 relative z-20'>
                                        {blog.name}
                                    </h1>
                                </div>
                                <div className=''>
                                    <div className='group-hover:text-yellow-100 group-hover:bg-teal-600  w-fit rounded-full px-6 py-2 text-sm text-teal-600 bg-yellow-100 '>Read this</div>
                                    {/* <PortableText value={blog.content} /> */}
                                </div>


                                {/* <Image src={blog?.image} alt={blog?.alt} width={250} height={100} className='object-cover rounded-lg' /> */}
                                <CgEditUnmask className=" stroke-2 stroke-teal-600/10 text-teal-500/30 h-28 w-28 rotate-45 absolute -right-4 bottom-0 " />

                            </div>

                        ))
                    ) : (<div className=''>
                        Error fetching blogs
                    </div>)
                }
                <div className=' border-yellow-100 rounded-xl flex items-center justify-center'>
                    <CgEditUnmask className=" stroke-2 stroke-yellow-100 text-teal-500 h-20 w-20 " />

                </div>
            </div>


        </div >
    )
}
