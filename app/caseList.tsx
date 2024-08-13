
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins"
// import { CartesianChart, Bar } from 'victory-native'
import { BarChart } from 'react-native-gifted-charts'
import { ScrollView, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { SegmentedButtons, Text, ToggleButton, useTheme } from 'react-native-paper';
import { Dropdown, DropdownInput } from 'react-native-paper-dropdown';
import CaseItem from '@/components/CaseItem';
import { Colors } from '@/constants/Colors';
import { useEffect } from 'react';
import {Dimensions} from 'react-native';

import StatsData from '../assets/Data/ScoreDataStats.json';

// const Drawer = createDrawerNavigator()
const OPTIONS = [
    { label: 'Most Recent', value: 'recent' },
    { label: 'Procedure Type', value: 'procedure' },
    { label: 'Duration (high to low)', value: 'high2low' },
    { label: 'Duration (low to high)', value: 'low2high' },
];

export default function CaseList() {

    const colorScheme = useColorScheme();

    const [value, setValue] = React.useState<string>('thisMonth');
    const [dropdownOption, setDropdownOption] = useState<string>();

    console.log(JSON.stringify(StatsData.length));

    const windowWidth = Dimensions.get('window').width;

    const [loaded, error] = useFonts({
        Poppins_500Medium,
    })

    return (
        <>
            <View style={{ flex: 1, backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface }} >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', marginTop: 32, marginBottom: 32, color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText, }} variant="labelLarge" >CASE LIST</Text>
                    <View
                        style={{
                            width: '90%'
                        }}
                    >
                        {/* Case summary info */}
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-evenly',
                                marginBottom: 16,
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >
                                <Text style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium' }} variant="displayMedium">30 min</Text>
                                <Text style={{ fontFamily: 'Poppins_500Medium', color: "#919191" }} >AVG. case time</Text>
                            </View>
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >
                                <Text style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium' }} variant="displayMedium">100</Text>
                                <Text style={{ fontFamily: 'Poppins_500Medium', color: "#919191" }} >Total Cases</Text>
                            </View>
                        </View>


                        {/* TODOL add Bargraph */}
                        {/* Bargraph Section */}
                        <View
                            style={{
                                alignItems: 'center',
                                width: '100%',
                                marginTop: 16,
                                marginBottom: 16,
                            }}
                        >
                            {/* <CartesianChart data={StatsData} xKey={"Date_CaseID"} yKeys={["DurationSurgeryState"]} >
                            {
                                ({ points, chartBounds}) => (
                                    <Bar 
                                        points={points.DurationSurgeryState}
                                        chartBounds={chartBounds}
                                        color={"#00A7D3"}
                                        roundedCorners={{topLeft: 8, topRight: 8}}
                                    />
                                )
                            }
                        </CartesianChart> */}
                            {/* <Text style={{  fontWeight: 'bold' }} variant="headlineLarge">*** Placeholder for barGraph ***</Text> */}
                            <BarChart
                                data={
                                    StatsData.map((val) => {
                                        return {
                                            value: val.DurationSurgeryState,        
                                            label: val.DurationSurgeryState,
                                            
                                            // labelTextStyle: {
                                            //     color: 'white',
                                            // }
                                        }
                                    })}
                                barBorderTopLeftRadius={2}
                                barBorderTopRightRadius={2}
                                yAxisLabelContainerStyle={{color: 'white'}}
                                yAxisTextStyle={{color: 'white'}}
                                xAxisColor={'white'}
                                frontColor={'#00A7D3'}
                                barWidth={10} 
                                width={windowWidth-200}/>
                        </View>

                        {/* Case Selection */}
                        <View
                            style={{
                                width: '100%',
                                marginBottom: 16,
                            }}
                        >
                            <SegmentedButtons
                                value={value}
                                onValueChange={setValue}
                                buttons={[
                                    {
                                        value: 'allTime',
                                        label: 'All Time',
                                        labelStyle: {
                                            fontFamily: 'Poppins_500Medium'
                                        },
                                        uncheckedColor: 'rgba(0, 167, 211, 1)',
                                        checkedColor: 'white',
                                   
                                    },
                                    {
                                        value: 'thisMonth',
                                        label: 'This Month',
                                        labelStyle: {
                                            fontFamily: 'Poppins_500Medium'
                                        },
                                        uncheckedColor: 'rgba(0, 167, 211, 1)',
                                        checkedColor: 'white',
                                    },
                                    {
                                        value: 'thisWeek',
                                        label: 'This Week',
                                        labelStyle: {
                                            fontFamily: 'Poppins_500Medium'
                                        },
                                        uncheckedColor: 'rgba(0, 167, 211, 1)',
                                        checkedColor: 'white',
                                    },
                                ]}
                                style={{
                                    marginBottom: 24,
                                }}
                            />
                            <Dropdown
                                label="Sort by"
                                placeholder="Sort by"
                                options={OPTIONS}
                                value={dropdownOption}
                                onSelect={setDropdownOption}
                            />
                        </View>

                        {/* Case List */}
                        <ScrollView style={{ flexGrow: 1 }}>
                            {StatsData &&
                                StatsData.length > 0 &&
                                StatsData.map((dataItem, index) => (
                                    <CaseItem
                                        key={index}
                                        type={dataItem.Procedure}
                                        duration={dataItem.DurationSurgeryState}
                                        id={dataItem.Date_CaseID.split('_')[1]}
                                        date={dataItem.StartingTime.split(' ')[0]}
                                        time={dataItem.StartingTime.split(' ')[1]}
                                    />
                                ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    );
}
