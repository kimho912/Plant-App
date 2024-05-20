import '../App.css';
import AddIcon from '../images/icon3.svg';
import SpringLeaves from '../images/leaves_left.png';
import FallLeaves from '../images/fall.png';
import SummerLeaves from '../images/summer.png';
import WinterLeaves from '../images/winter.png';

import { BackButton } from './Plant';

function SeasonLeaves ( {season,previous,setScreen} ) {
    return(
        <>
            {season === 'spring' && (
                <div className="top-leaves">
                <img src={SpringLeaves} alt="SpringLeaves"  />
                {previous === 'dashboard' && (
                    <img src={AddIcon} alt="Add" className="add-icon" onClick={() => setScreen("plant-search")} />
                )}
                {previous === 'profile' && (
                    <BackButton setScreen={setScreen} />
                )}
                </div>
            )}
            {season === 'fall' && (
                <div className="top-leaves">
                    <img src={FallLeaves} alt="FallLeaves"  />
                    {previous === 'dashboard' && (
                        <img src={AddIcon} alt="Add" className="add-icon" onClick={() => setScreen("plant-search")} />
                    )}
                    {previous === 'profile' && (
                        <BackButton setScreen={setScreen} />
                    )}
                </div>
            )}
            {season === 'summer' && (
                <div className="top-leaves">
                    <img src={SummerLeaves} alt="SummerLeaves"  />
                    {previous === 'dashboard' && (
                        <img src={AddIcon} alt="Add" className="add-icon" onClick={() => setScreen("plant-search")} />
                    )}
                    {previous === 'profile' && (
                        <BackButton setScreen={setScreen} />
                    )}
                </div>
            )}
            {season === 'winter' && (
                <div className="top-leaves">
                    <img src={WinterLeaves} alt="WinterLeaves"  />
                    {previous === 'dashboard' && (
                        <img src={AddIcon} alt="Add" className="add-icon" onClick={() => setScreen("plant-search")} />
                    )}
                    {previous === 'profile' && (
                        <BackButton setScreen={setScreen} />
                    )}
                </div>
            )}
        </>
    )
}

export { SeasonLeaves };