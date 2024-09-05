import { SectionCard } from "./Cards/SectionCard"

export const SectionTwo = () => {
    const features =
    {
        title: "Why Onariam",
        description: "Expertise and Innovation: Our team consists of tech experts who are passionate about staying at the forefront of technological advancements. We continuously update our knowledge and offerings to provide you with the latest and most effective solutions.",
        points: [
            {
                title: "Client-Centric Approach",
                description: "Your Success Is Our Success: We are committed to understanding your business objectives and challenges. Your success is our primary goal, and we tailor our services to address your unique needs."
            },
            {
                title: "Efficiency and Productivity",
                description: "Maximizing Your Potential: We believe in the power of technology to optimize business processes and boost productivity. Our solutions are designed to help you work smarter, not harder."
            },
            {
                title: "Customization and Flexibility",
                description: "No One-Size-Fits-All: We recognize that every business is unique. That's why our services and solutions are highly customizable to suit your specific requirements. We adapt to your needs, not the other way around."
            },
            {
                title: "Security and Reliability",
                description: "Your Data, Our Priority: Data security is paramount. We employ state-of-the-art security measures to protect your information, ensuring it remains confidential and reliable."
            },
            {
                title: "Proven Track Record",
                description: "Success Stories: Our portfolio is a testament to our ability to deliver results. We have a history of helping businesses like yours achieve their goals and drive growth."
            }
        ]

    }

    return (
        <div className="w-full mx-auto py-12 my-12">
            <h1 className="text-4xl font-semibold text-yellow-100 text-center">Why Onariam ? </h1>
            {
                features.points?.map((data, index) => {

                    return (<SectionCard data={data} key={index} id={index} />)
                })
            }
        </div>
    )
}