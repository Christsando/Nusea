import Footer from "../../../components/Footer";
import UserNavbar from "../../../components/UserNavbar";
import QuizSection from "../components/QuizSection";
import { quizData } from "../datas/DataEdu";
import { useParams } from "react-router-dom";

function EduCourse() {
    const { courseId } = useParams();
    const courseQuiz = quizData[courseId];

    return (
        <div className="bg-white min-h-screen">
            <UserNavbar />
            <main>
                <section className="relative flex items-end justify-center h-[500px] bg-cover bg-center text-white text-center" style={{ backgroundImage: `url(${courseQuiz.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                    <div className="relative inset-x-0 bottom-0 max-w-4xl px-4">
                        <h1 className="text-2xl font-bold">{courseQuiz.title}</h1>
                        <p className="text-sm text-gray-200 mb-16">{courseQuiz.description}</p>
                    </div>
                </section>
                <section className="py-16 sm:py-20 bg-slate-50">
                    <QuizSection quiz={courseQuiz.questions} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default EduCourse;
