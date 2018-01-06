import * as React from 'react'
import {
  View,
} from 'react-native'
import {
  Button,
  Text,
  Icon,
  Footer,
  FooterTab,
} from 'native-base'
import { TabNavigator } from 'react-navigation'

import Camera from './components/Camera/index'
import Diary from './components/Diary/index'
import Settings from './components/Settings/index'

export default class Root extends React.Component<object, object> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationTab />
      </View>
    )
  }
}

const NavigationTab = TabNavigator(
  {
    Camera: { screen: Camera },
    Diary: { screen: Diary },
    Settings: { screen: Settings },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('Camera')}>
              <Icon name='camera' />
              <Text>Camera</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('Diary')}>
              <Icon name='book' />
              <Text>Diary</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate('Settings')}>
              <Icon name='settings' />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    },
  },
)