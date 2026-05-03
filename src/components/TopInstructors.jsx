import { FaStar } from "react-icons/fa";

const instructors = [
    { id: 1, name: "John Smith", role: "Senior Web Developer", rating: 4.8 },
    { id: 2, name: "Sarah Chen", role: "Data Scientist", rating: 4.9 },
    { id: 3, name: "David Lee", role: "Lead UX Designer", rating: 4.7 },
    { id: 4, name: "Elena Rodriguez", role: "Marketing Director", rating: 4.8 },
];

const TopInstructors = () => {
    return (
        <div className="bg-blue-50 py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Instructors</h2>
                <p className="text-gray-500 text-sm">Learn directly from industry veterans.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
                {instructors.map((instructor) => (
                    <div key={instructor.id} className="flex flex-col items-center text-center gap-2">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-md bg-blue-200 flex items-center justify-center text-blue-700 text-3xl font-bold">
                            {instructor.name.charAt(0)}
                        </div>

                        <h3 className="text-sm font-bold text-gray-900 mt-2">{instructor.name}</h3>
                        <p className="text-xs text-gray-500">{instructor.role}</p>
                        <div className="flex items-center gap-1 text-orange-500 text-xs font-semibold">
                            <FaStar></FaStar> {instructor.rating} Rating
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopInstructors;