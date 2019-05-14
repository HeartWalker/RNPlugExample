import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { withNavigation,NavigationInjectedProps } from "react-navigation";

interface Props extends NavigationInjectedProps {
  screen: string;
}
class TouchAble extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { screen } = this.props;
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.touch}>
          <Text>go to {screen} test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(TouchAble);

const styles = StyleSheet.create({
  view: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#555"
  },
  touch: { flex: 1, justifyContent: "center", paddingLeft: 15 }
});
