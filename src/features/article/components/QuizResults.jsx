import { useNavigate } from "react-router-dom";
import quizFinish from "../../../assets/images/article/QuizFinish.png";

function QuizResults({ score, totalQuestions, questions }) {
    const navigate = useNavigate()

    return (
        <div className="max-w-5xl mx-auto px-18">
            <div className="flex justify-center">
                <img src={quizFinish} alt="Quiz Selesai" className="w-64 h-auto mx-auto" />
                <div className="px-20">
                    <h2 className="text-3xl font-bold text-blue-700">Selamat!</h2>
                    <p className="text-3xl mt-2 font-bold text-blue-700">Kamu berhasil menyelesaikan Quiz dengan nilai :</p>
                    <p className="text-4xl font-bold text-orange-600 my-4">
                        {(score * 10) / totalQuestions}
                        <span className="text-4xl text-slate-500">/10</span>
                    </p>
                    <button onClick={() => navigate('/edupage')} className="mt-4 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Kembali ke Beranda
                    </button>
                </div>
            </div>

            <div className="text-left mt-12 border-t pt-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Ulasan Jawaban</h3>
                {questions.map((question, index) => (
                    <div key={question.id} className="mb-8">
                        <p className="font-bold text-lg text-slate-800 mb-4">
                            {index + 1}. {question.question}
                        </p>
                        <div className="flex flex-col gap-3">
                            {question.options.map((option) => {
                                const isCorrectAnswer = option.id === question.correct;

                                // Logika untuk menentukan styling kartu
                                let cardClasses = "flex items-start w-full p-4 rounded-lg border-2 text-left ";
                                if (isCorrectAnswer) {
                                    cardClasses += "border-orange-500 bg-orange-50 ring-2 ring-orange-100";
                                } else {
                                    cardClasses += "border-gray-200 bg-white";
                                }

                                return (
                                    <div key={option.id} className={cardClasses}>
                                        <span className={`font-bold text-lg mr-5 ${isCorrectAnswer ? "text-orange-600" : "text-slate-600"}`}>{option.id}</span>
                                        <div className="flex-1">
                                            <p className={`text-slate-800 ${isCorrectAnswer ? "font-semibold" : ""}`}>{option.text}</p>
                                            {isCorrectAnswer && <p className="mt-2 text-sm text-slate-600">{question.explain}</p>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizResults