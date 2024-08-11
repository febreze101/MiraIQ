import { BottomNavigation } from "react-native-paper";
// import CaseSummary from './CaseSummary';
import CaseSummary from "./caseSummary";
import CaseStats from './caseStats';
import CaseVideoPage from './caseVideoPage';
import { useState } from "react";
import { Easing } from "react-native";


export default function CaseDetails() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'summary', title: 'Summary', focusedIcon: 'clipboard-list', unfocusedIcon: 'clipboard-list-outline'},
        { key: 'stats', title: 'Statistics', focusedIcon: 'chart-box', unfocusedIcon: 'chart-box-outline'},
        { key: 'video', title: 'Video', focusedIcon: 'video', unfocusedIcon: 'video-outline'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        summary: CaseSummary,
        stats: CaseStats,
        video: CaseVideoPage,
    });

    return (
        <>
            <BottomNavigation 
                sceneAnimationType="shifting"
                sceneAnimationEasing={Easing.sin}
                navigationState={{ index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
                keyboardHidesNavigationBar
            />
        </>
    )
}