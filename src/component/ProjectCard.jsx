import React from 'react';
const badgeStyles = {
  featured: 'bg-white/10 text-purple-200 border border-purple-300/20',
  new: 'bg-white/10 text-cyan-200 border border-cyan-300/20',
};

const tagColors = [
  'bg-purple-900/50 text-purple-300',
  'bg-sky-900/50 text-sky-300',
  'bg-emerald-900/50 text-emerald-300',
  'bg-rose-900/50 text-rose-300',
];

const ProjectCard = ({
  icon,
  title,
  subtitle,
  description,
  tags,
  badge,
  headerGradient,
  buttonGradient,
}) => {
  return (
    <div className="max-w-lg w-full h-full rounded-2xl overflow-hidden bg-slate-800 shadow-xl border border-slate-700 flex flex-col">

      <div className={`p-4 sm:p-6 bg-gradient-to-br ${headerGradient} rounded-t-2xl`}>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <div className="bg-black/20 p-3 rounded-lg w-fit">
              {icon}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
              <p className="text-sm text-white/80">{subtitle}</p>
            </div>
          </div>
          {badge && (
            <span className={`flex-shrink-0 ml-4 px-3 py-1 text-xs font-semibold rounded-full ${badgeStyles[badge.type]}`}>
              {badge.text}
            </span>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
        <p className="text-slate-300 leading-relaxed">
          {description}
        </p>
        
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tags.map((tag, index) => (
              <div key={index} className={`p-2 rounded-md text-center text-sm font-medium ${tagColors[index % tagColors.length]}`}>
                {tag}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className={`w-full sm:w-auto px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${buttonGradient} transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white/50`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

