import { ScrollView, View, useColorScheme } from "react-native"
import React, { useState } from "react"
import { SegmentedButtons, Text, ToggleButton, useTheme } from "react-native-paper"
import { Dropdown, DropdownInput } from "react-native-paper-dropdown"
import CaseItem from "@/components/CaseItem"
import { Colors } from "@/constants/Colors"
import { useEffect } from "react"
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins"
// import { CartesianChart, Bar } from 'victory-native'
import { BarChart } from 'react-native-gifted-charts'

import StatsData from '../assets/Data/ScoreDataStats.json'

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
                                // backgroundColor: '#540000'
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
                                alignItems: "center",
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
                                width={400}/>
                        </View>

                        {/* Case Selection */}
                        <View
                            style={{
                                width: '100%',
                                marginBottom: 16
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
                                        style: {
                                            // backgroundColor: 'rgba(0, 167, 211, 1)'
                                        }
                                    },
                                    {
                                        value: 'thisMonth',
                                        label: 'This Month',
                                        labelStyle: {
                                            fontFamily: 'Poppins_500Medium'
                                        },
                                        uncheckedColor: 'rgba(0, 167, 211, 1)'
                                    },
                                    {
                                        value: 'thisWeek',
                                        label: 'This Week',
                                        labelStyle: {
                                            fontFamily: 'Poppins_500Medium'
                                        },
                                        uncheckedColor: 'rgba(0, 167, 211, 1)'
                                    },
                                ]}
                                style={{
                                    marginBottom: 24,

                                }}

                            />
                            <Dropdown
                                label='Sort by'
                                placeholder="Sort by"
                                options={OPTIONS}
                                value={dropdownOption}
                                onSelect={setDropdownOption}
                            />
                        </View>

                        {/* Case List */}
                        <ScrollView style={{ flexGrow: 1 }}>


                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                            <CaseItem type={'Sigmoid Colectomy'} duration={100} id={'RG7100'} date="09/21/33" time='9:21 AM' />
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    )
}