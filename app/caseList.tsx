import { ScrollView, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { SegmentedButtons, Text, ToggleButton, useTheme } from 'react-native-paper';
import { Dropdown, DropdownInput } from 'react-native-paper-dropdown';
import CaseItem from '@/components/CaseItem';
import { Colors } from '@/constants/Colors';
import { useEffect } from 'react';

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

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: colorScheme === 'dark' ? Colors.dark.colors.surface : Colors.light.colors.surface,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            marginTop: 32,
                            marginBottom: 32,
                            color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText,
                        }}
                        variant="labelLarge"
                    >
                        CASE LIST
                    </Text>
                    <View
                        style={{
                            width: '90%',
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
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ fontWeight: 'bold' }} variant="displayMedium">
                                    30 min
                                </Text>
                                <Text style={{}}>AVG. case time</Text>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ fontWeight: 'bold' }} variant="displayMedium">
                                    100
                                </Text>
                                <Text style={{}}>Total Cases</Text>
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
                            <Text style={{ fontWeight: 'bold' }} variant="headlineLarge">
                                *** Placeholder for barGraph ***
                            </Text>
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
                                        uncheckedColor: 'rgba(0, 167, 211, 1)',
                                        checkedColor: 'white',
                                        style: {
                                            // backgroundColor: 'rgba(0, 167, 211, 1)'
                                        },
                                    },
                                    {
                                        value: 'thisMonth',
                                        label: 'This Month',
                                        uncheckedColor: 'rgba(0, 167, 211, 1)',
                                        checkedColor: 'white',
                                    },
                                    {
                                        value: 'thisWeek',
                                        label: 'This Week',
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
