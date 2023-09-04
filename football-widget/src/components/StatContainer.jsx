import SingleStat from "./SingleStat";
import { useState } from "react";


const StatContainer = ({ data }) => {

    const [matchTime, setMatchTime] = useState("FT")

    const FT = {
        possession: {
            away: `${data.liveData.lineups.away.stats[5].value}%`,
            home: `${data.liveData.lineups.home.stats[3].value}%`
        },
        shots: {
            away: data.liveData.lineups.away.stats[4].value,
            home: data.liveData.lineups.home.stats[0].value
        },

        shotsOnTarget: {
            away: data.liveData.lineups.away.stats[3].value,
            home: data.liveData.lineups.home.stats[1].value
        },

        corners: {
            away: data.liveData.lineups.away.stats[2].value,
            home: data.liveData.lineups.home.stats[2].value
        }
    }


    const FH = {
        possession: {
            away: data.liveData.lineups.away.stats[5].fh,
            home: data.liveData.lineups.home.stats[3].fh
        },

        shots: {
            away: data.liveData.lineups.away.stats[4].fh,
            home: data.liveData.lineups.home.stats[0].fh
        },

        shotsOnTarget: {
            away: data.liveData.lineups.away.stats[3].fh,
            home: data.liveData.lineups.home.stats[1].fh
        },

        corners: {
            away: data.liveData.lineups.away.stats[2].fh, 
            home: data.liveData.lineups.home.stats[2].fh
        }
    }


    const SH = {
        possession: {
            away: data.liveData.lineups.away.stats[5].sh,
            home: data.liveData.lineups.home.stats[3].sh
        },

        shots: {
            away: data.liveData.lineups.away.stats[4].sh,
            home: data.liveData.lineups.home.stats[0].sh
        },

        shotsOnTarget: {
            away: data.liveData.lineups.away.stats[3].sh,
            home: data.liveData.lineups.home.stats[1].sh
        },

        corners: {
            away: data.liveData.lineups.away.stats[2].sh, 
            home: data.liveData.lineups.home.stats[2].sh
        }
    }

    return (
        <div className="statContainer">
        <h3>
        General
        </h3>
        <form className="statButtons">
            <button className="statContainerButton" onClick={() => setMatchTime("FT")} value="FT">Full Time</button>
            <button className="statContainerButton" onClick={() => setMatchTime("FH")} value="FH">1st Half</button>
            <button className="statContainerButton" onClick={() => setMatchTime("SH")}value="SH">2nd Half</button>
        </form>
        Possession<SingleStat matchData={FT.possession}/>
        Shots<SingleStat matchData={FT.shots}/>
        Shots on target<SingleStat matchData={FT.shotsOnTarget}/>
        Corners<SingleStat matchData={FT.corners}/>

        </div>
    )
}

export default StatContainer;