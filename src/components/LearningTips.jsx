const LearningTips = () => {
    return (
        <div className="py-16 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning Tips</h2>
                <p className="text-gray-500 text-sm">
                    Optimize your study routine with these proven techniques.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-orange-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <span className="text-3xl mb-4 block">⏱️</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            The Pomodoro Technique
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Boost your focus and prevent burnout. Work in focused 25-minute
                            intervals, followed by a short 5-minute break. This structured
                            approach helps maintain high cognitive function during learning
                            sessions.
                        </p>
                    </div>
                    <button className="mt-6 text-orange-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Learn More →
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1">
                        <span className="text-2xl mb-3 block">📘</span>
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                            Active Recall
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Test yourself frequently rather than passively re-reading notes
                            to strengthen memory retention.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl shrink-0">
                            📈
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-1">
                                Spaced Repetition
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Review material at gradually increasing intervals. This
                                leverages the psychological spacing effect to embed knowledge
                                into long-term memory efficiently.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-100 rounded-2xl p-6 border border-blue-200 shadow-sm">
                    <span className="text-2xl mb-3 block">📅</span>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                        Consistent Scheduling
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Dedicate specific blocks of time each week solely for upskilling
                        to build a lasting habit.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LearningTips;