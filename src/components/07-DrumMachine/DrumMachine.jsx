const DrumMachine = () => {
    return (<>
        <article id="drum-machine">
            <h1>Drum Machine</h1>
            <button type="button" className="drum-pad" id="heater-1">
                <audio controls src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
                Q
            </button>
            <button type="button" className="drum-pad" id="heater-2">
                <audio src="" className="clip" id="W"></audio>
                W
            </button>
            <button type="button" className="drum-pad" id="heater-3">
                <audio src="" className="clip" id="E"></audio>
                E
            </button>
            <button type="button" className="drum-pad" id="heater-4">
                <audio src="" className="clip" id="A"></audio>
                A
            </button>
            <button type="button" className="drum-pad" id="clap">
                <audio src="" className="clip" id="S"></audio>
                S
            </button>
            <button type="button" className="drum-pad" id="open-hh">
                <audio src="" className="clip" id="D"></audio>
                D
            </button>
            <button type="button" className="drum-pad" id="kick-n-hat">
                <audio src="" className="clip" id="Z"></audio>
                Z
            </button>
            <button type="button" className="drum-pad" id="kick">
                <audio src="" className="clip" id="X"></audio>
                X
            </button>
            <button type="button" className="drum-pad" id="closed-hh">
                <audio src="" className="clip" id="C"></audio>
                C
            </button>
            <div id="display">
            </div>

        </article>
    </>)
}

export default DrumMachine;