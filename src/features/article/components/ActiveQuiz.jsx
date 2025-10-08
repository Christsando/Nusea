function ActiveQuiz({ question, onAnswerSelect, selectAnswer, onNext, isLastQuestion }) {
    return (
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1 flex flex-col">
                <h2 className="text-4xl font-bold text-blue-700 leading-tight">{question.question}</h2>
                <button onClick={onNext} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-auto w-fit">
                    {isLastQuestion ? "Selesai" : "Selanjutnya ->"}
                </button>
            </div>
            <div className="flex-[1.2] flex flex-col gap-4">
                {question.options.map((option) => {
                    const isSelected = selectAnswer === option.id;
                    const cardClasses = `
                flex items-center w-full p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                ${isSelected ? "border-orange-400 bg-orange-50 ring-2 ring-red-200" : "border-gray-200 bg-white hover:border-blue-500"}
            `;

                    return (
                        <div key={option.id} className={cardClasses.trim()} onClick={() => onAnswerSelect(option.id)}>
                            <span className={`font-bold text-lg mr-5 ${isSelected ? "text-orange-600" : "text-slate-600"}`}>{option.id}</span>
                            <p className={`text-slate-700 ${isSelected ? "font-medium" : ""}`}>{option.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActiveQuiz