var React = require('react')
var {Text, TouchableHighlight, View} = require('react-native')
var createClass = require('create-react-class')

var styles = require('./styles.js')

var Listitem = createClass({
  getDefaultProps: function() {
    return {
      onPress: null,
      onLongPress: null,
      text: null,
      underlayColor: "rgba(0,0,0,.015)",
    }
  }
, _handlePress: function() {
    var onPress = this.props.onPress
    if (onPress) onPress()
  }
, _handleLongPress: function() {
    var onLongPress = this.props.onLongPress
    if (onLongPress) onLongPress()
  }
, render: function() {
    var self = this
    var p = self.props

    //  style container (for backgroundColor and indent)
    var styleLiContainer = [styles.liContainer]
    if (p.backgroundColor) styleLiContainer.push([{ backgroundColor: p.backgroundColor }])
    if (p.indent > -1) styleLiContainer.push([{ paddingLeft: p.indent }])

    var listitemChild = <Text style={[styles.liText, p.styleText]}>{p.text}</Text>
    if (p.children) var listitemChild = <View>{p.children}</View>

    var listitem = <View style={[styles.li, p.style]}>{listitemChild}</View>

    return (
      (p.onPress || p.onLongPress) ?
        <TouchableHighlight
          style={styleLiContainer}
          underlayColor={p.underlayColor}
          onPress={self._handlePress}
          onLongPress={self._handleLongPress}
        >
            {listitem}
        </TouchableHighlight>
      : <View style={styleLiContainer}>{listitem}</View>
    )
  }
})

module.exports = Listitem
