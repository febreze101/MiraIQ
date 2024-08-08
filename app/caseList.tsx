import { ScrollView, View } from "react-native"
import React, { useState } from "react"
import { SegmentedButtons, Text, ToggleButton } from "react-native-paper"
import { Dropdown, DropdownInput } from "react-native-paper-dropdown"
import CaseItem from "@/components/CaseItem"

// const Drawer = createDrawerNavigator()
const OPTIONS = [
    { label: 'Most Recent', value: 'recent' },
    { label: 'Procedure Type', value: 'procedure' },
    { label: 'Duration (high to low)', value: 'high2low' },
    { label: 'Duration (low to high)', value: 'low2high' },
  ];

export default function CaseList() {

    const [value, setValue] = React.useState<string>('thisMonth');
    const [dropdownOption, setDropdownOption] = useState<string>();

    return (
        <>
        <View style={{ flex: 1 }} >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: '#3e3e3e', fontWeight: 'bold', marginTop: 64, marginBottom: 32 }} variant="labelLarge" >CASE LIST</Text>
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
                            marginBottom: 16
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: '#3e3e3e', fontWeight: 'bold' }} variant="displayMedium">30 min</Text>
                            <Text style={{ color: '#3e3e3e' }} >AVG. case time</Text>
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: '#3e3e3e', fontWeight: 'bold' }} variant="displayMedium">100</Text>
                            <Text style={{ color: '#3e3e3e' }} >Total Cases</Text>
                        </View>
                    </View>


                    {/* TODOL add Bargraph */}
                    {/* Bargraph Section */}
                    <View
                        style={{
                            alignItems: "center",
                            width: '100%',
                            marginTop: 16,
                            marginBottom: 16
                        }}
                    >
                        <Text style={{ color: '#3e3e3e', fontWeight: 'bold' }} variant="headlineLarge">*** Placeholder for barGraph ***</Text>
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
                                },
                                {
                                    value: 'thisMonth',
                                    label: 'This Month',
                                },
                                { 
                                    value: 'thisWeek', 
                                    label: 'This Week' 
                                },
                            ]}
                            style={{
                                marginBottom: 24
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
                    <ScrollView  style={{ flexGrow: 1 }}>
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