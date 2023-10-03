import { FC } from 'react'
import { motion } from 'framer-motion'

const Hero: FC = () => {
    return (
        <div className="relative z-50 -mt-16 flex h-full items-center justify-between gap-16">
            <div className="relative flex flex-col gap-6">
                <p className="z-50 text-5xl font-semibold text-white">
                    Test en ligne rendu{' '}
                    <span className="text-purple">facile</span> et{' '}
                    <span className="text-red">accessible</span> à tous.
                </p>
                <p className="font-Monolisa text-xs leading-5 text-white text-opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci tenetur sed id maxime, vel minima molestiae
                    sint doloremque facere dicta, consequatur quas voluptate!
                </p>
                <div className="flex gap-4">
                    <button className="w-40 rounded-xl bg-[#6e7cd2] py-3 font-Gilroy">
                        Start now
                    </button>
                    <div className="flex gap-2 rounded-xl border-2 border-[#6e7cd2] border-opacity-40 px-6 py-3 font-Gilroy text-[#6e7cd2] hover:bg-[#6e7cd2] hover:text-black">
                        <img src="./assets/icons/ic_play.png" className="w-6" />
                        <p>Demander un démo</p>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ y: -10 }}
                animate={{
                    y: 10,
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 1.5,
                }}
            >
                <img
                    src="./assets/img/img_developer_script.png"
                    alt="Developer"
                    className="z-40 w-[60rem]"
                />
                {/* <div className="absolute bottom-0 z-20 h-11 w-52 bg-[#6e7cd2] blur-2xl"></div> */}
            </motion.div>
            {/* <div className="bottom-50 absolute z-10 h-36 w-36 bg-[#ff2b69] opacity-70 blur-3xl"></div> */}
        </div>
    )
}

export default Hero
