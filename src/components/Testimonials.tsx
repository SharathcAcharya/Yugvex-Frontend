import { motion } from 'framer-motion';

const messages = [
  {
    user: "ProductivityKing",
    avatarColor: "bg-brand-accent",
    time: "Today at 10:42 AM",
    content: "Just hit a 30-day streak on the 'Morning Run' quest! The XP boost is insane. ",
    reactions: [" 12", " 5"]
  },
  {
    user: "Sarah_Dev",
    avatarColor: "bg-brand-primary",
    time: "Today at 10:45 AM",
    content: "My squad just defeated the 'Procrastination Boss' raid. Who wants to join for the next one?",
    reactions: [" 8", " 3"]
  },
  {
    user: "ZenMaster",
    avatarColor: "bg-brand-secondary",
    time: "Today at 11:02 AM",
    content: "The AI Coach actually gave me better advice than my real therapist lol. 'Focus on small wins.'",
    reactions: [" 20", " 15"]
  }
];

const Testimonials = () => {
  return (
    <section id="community" className="py-24 bg-surface-raised relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
              Join a Community of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Real Players</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Don't grind alone. Join thousands of users who are leveling up their lives together in real-time. Share wins, find accountability partners, and celebrate victories.
            </p>
            <div className="flex items-center space-x-4">
               <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-raised bg-surface-glass bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20" />
                   ))}
               </div>
               <span className="text-text-primary font-medium">500+ Online now</span>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="glass-panel overflow-hidden shadow-2xl mx-auto max-w-xl bg-surface-base/50">
              {/* Fake Header */}
              <div className="bg-white/5 px-4 py-3 flex items-center shadow-sm border-b border-surface-glass-border">
                <div className="text-2xl text-text-tertiary mr-2">#</div>
                <span className="font-bold text-text-primary">community-feedback</span>
              </div>

              {/* Messages Area */}
              <div className="p-4 space-y-6 h-[400px] overflow-y-auto custom-scrollbar">
                {messages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={"w-10 h-10 rounded-full  flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity shadow-lg shadow-black/20 text-white flex items-center justify-center font-bold text-lg"}>
                        {msg.user[0]}
                      </div>
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-brand-primary font-medium hover:underline cursor-pointer">{msg.user}</span>
                          <span className="text-xs text-gray-300">{msg.time}</span>
                        </div>
                        <p className="text-gray-200 mt-1">{msg.content}</p>
                        
                        {/* Reactions */}
                        <div className="flex flex-wrap gap-1 mt-2">
                            {msg.reactions.map((reaction, rIdx) => (
                                <div key={rIdx} className="bg-surface-glass hover:bg-white/10 cursor-pointer px-2 py-0.5 rounded-[4px] border border-transparent hover:border-surface-glass-border transition-all flex items-center text-xs text-gray-200">
                                    {reaction}
                                </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            
                {/* Typing Indicator */}
                <div className="flex items-center space-x-4 animate-pulse opacity-50">
                    <div className="w-10 h-10 rounded-full bg-surface-glass" />
                    <div className="space-y-2">
                        <div className="h-2 w-32 bg-surface-glass rounded" />
                        <div className="h-2 w-48 bg-surface-glass rounded" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
