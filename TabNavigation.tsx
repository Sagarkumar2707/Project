/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, View} from 'react-native';
import {TAB_BAR_ICONS} from '../assets';
import {BottomTabContainer} from './components';
import {FONTS, ROUTES} from './constants';
import {Home, Profile, Saved, Tickets} from './pages';
import {COLORS} from './styles';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === ROUTES.HOME) {
              iconName = focused
                ? TAB_BAR_ICONS.homeIcon
                : TAB_BAR_ICONS.homeUnfocused;
            } else if (route.name === ROUTES.SAVED_PAGE) {
              iconName = focused
                ? TAB_BAR_ICONS.saveFocused
                : TAB_BAR_ICONS.saveIcon;
            } else if (route.name === ROUTES.TICKETS_PAGE) {
              iconName = focused
                ? TAB_BAR_ICONS.ticketFocused
                : TAB_BAR_ICONS.ticketIcon;
            } else if (route.name === ROUTES.PROFILE) {
              iconName = focused
                ? TAB_BAR_ICONS.profileFocused
                : TAB_BAR_ICONS.profileIcon;
            }
            return (
              <View
                style={{
                  marginLeft: route.name === ROUTES.HOME ? 12 : null,
                  marginRight: route.name === ROUTES.PROFILE ? 12 : null,
                }}>
                <BottomTabContainer
                  iconUrl={iconName}
                  label={
                    focused
                      ? route.name === ROUTES.HOME
                        ? 'For You'
                        : route.name
                      : ''
                  }
                />
              </View>
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 90 : 80,
          },
        })}
        initialRouteName={ROUTES.HOME}>
        <Tab.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            tabBarLabelStyle: {
              fontFamily: FONTS.Inter,
              fontSize: 12,
              color: COLORS.black,
            },
          }}
        />
        <Tab.Screen
          name={ROUTES.SAVED_PAGE}
          component={Saved}
          options={{
            tabBarLabelStyle: {
              fontFamily: FONTS.Inter,
              fontSize: 12,
              color: COLORS.black,
            },
          }}
        />
        <Tab.Screen
          name={ROUTES.TICKETS_PAGE}
          component={Tickets}
          options={{
            tabBarLabelStyle: {
              fontFamily: FONTS.Inter,
              fontSize: 12,
              color: COLORS.black,
            },
          }}
        />
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={{
            tabBarLabelStyle: {
              fontFamily: FONTS.Inter,
              fontSize: 12,
              color: COLORS.black,
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
