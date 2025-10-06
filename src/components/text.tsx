<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSteps.map((step, index) => <div key={index} className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600">
                  {step.icon}
                </div>
                {index !== currentSteps.length - 1 && <div className="h-full w-0.5 bg-emerald-200 mx-auto mt-2 hidden md:block"></div>}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>)}
        </div>