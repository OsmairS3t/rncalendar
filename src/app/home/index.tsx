import { View } from "react-native";
import { useState } from "react";
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { ptBR } from "../../utils/localeCalendarConfig";

LocaleConfig.localse["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

export function Home() {
  const [day, setDay] = useState<DateData>()
  return (
    <View style={styles.container}>
      <Calendar 
        style={styles.calendar} 
        headerStyle={{ 
          borderBottomWidth: 0.5, 
          borderBottomColor: "#e8e8e8", 
          paddingBottom: 10, 
          marginBottom: 10,
        }} 
        renderArrow={(direction: "right"|"left") => 
          <Feather size={24} color="#e8e8e8" name={`chevron-${direction}`} />
        }
        theme={{
          textMonthFontSize: 18,
          todayTextColor: "#f06543",
          selectedDayBackgroundColor: "#f06543",
          selectedDayTextColor: "#e8e8e8",
          arrowColor: "#e8e8e8",
          calendarBackground: "transparent",
          textDayStyle: {color: "#e8e8e8"},
          textDisabledColor: "#717171",
          arrowStyle: {
            margin: 0,
            padding: 0,
          }
        }}
        minDate={ new Date().toDateString()}
        hideExtraDays
        onDayPress={setDay}
        markedDates={day && {
          [day.dateString]: {selected: true},
        }}
      />
    </View>
  )
}