import { useEffect, useRef, useState } from "react";

const DrumMachine = () => {

    const currentAudioRef = useRef({}); //obj to store all audio refs
    const [audioName, setAudioName] = useState(""); // dynamic audio name to display

    const buttonsToDisplay = [
        { audioName: "Heater 1", buttonId: "heater-1", keyName: "Q", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
        { audioName: "Heater 2", buttonId: "heater-2", keyName: "W", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
        { audioName: "Heater 3", buttonId: "heater-3", keyName: "E", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
        { audioName: "Heater 4", buttonId: "heater-4", keyName: "A", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
        { audioName: "Clap", buttonId: "clap", keyName: "S", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
        { audioName: "Open HH", buttonId: "open-hh", keyName: "D", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
        { audioName: "Kick n' Hat", buttonId: "kick-n-hat", keyName: "Z", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
        { audioName: "Kick", buttonId: "kick", keyName: "X", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
        { audioName: "Closed HH", buttonId: "closed-hh", keyName: "C", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
    ]

    const keyAudioRelation = {
        81: "heater-1",
        87: "heater-2",
        69: "heater-3",
        65: "heater-4",
        83: "clap",
        68: "open-hh",
        90: "kick-n-hat",
        88: "kick",
        67: "closed-hh",
    }

    //dinamically register each audio in ref {}
    const setAudioRef = (idAudio, item) => {
        currentAudioRef.current[idAudio] = item;
    }

    const handleClick = (event) => {
        // console.log('handleClick event keee?? ', event.target.id);
        setAudioName(buttonsToDisplay.find((obj) => obj.buttonId === event.target.id).audioName);
        // console.log('encontro el audioName?? ', audioName);

        const myAudio = currentAudioRef.current[event.target.id];
        // console.log('que es myAudio???? ', myAudio);

        myAudio?.play();

        // console.log('whats currentAudioRef.current??? ', currentAudioRef.current);
        //currentAudioRef.current.play(); //'play' is a method for audio/video html tags
    }

    const handleKeyPress = (key) => {
        // console.log('que es la key? ', key);
        if (key === undefined) return;
        // console.log('keyAudioRelation[key]: ', keyAudioRelation[key]);

        const myAudio = currentAudioRef.current[keyAudioRelation[key]];
        // console.log('que es myAudio???? ', myAudio);

        myAudio?.play();
        setAudioName(keyAudioRelation[key]);

    }

    useEffect(() => {

        const handleKeyDown = (event) => {
            // console.log(event.keyCode);
            console.log(event);
            // let tecla = event.key?.toUpperCase();
            // console.log('teclaaa ', tecla);
            handleKeyPress(event.keyCode);
        }

        document.addEventListener('keydown', handleKeyDown);

        //return to cleanup
    }, []);

    // console.log('que es el currentAudioRef??? ', currentAudioRef);

    return (<>
        <h1>Drum Machine</h1>
        <article id="drum-machine">

            {buttonsToDisplay?.map((item, i) => {
                return (
                    <button key={i} type="button" className="drum-pad" id={item.buttonId} onClick={handleClick}>
                        <audio
                            src={item.audioSrc}
                            className="clip"
                            id={item.keyName}
                            // inline callback function
                            ref={(el) => setAudioRef(item.buttonId, el)}>
                        </audio>
                        {item.keyName}
                    </button>
                )
            })}

            <div id="display">
                <h2>{audioName}</h2>
            </div>

        </article>
    </>)
}

export default DrumMachine;