'use strict';

import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Picture from '@ali/rax-picture';
import Text from 'rax-text';
import styles from './style.css';

class Block_0 extends Component {
  state = {};
  render() {
    return (
      <View style={styles.mod}>
        <Picture
          style={styles['icon-piece']}
          source={{ uri: './images/img_111519_0_1.png' }}
          autoScaling={false}
          autoWebp={false}
        />
        <View style={styles['col-item0']}>
          <Text style={styles.tag} lines={1}>
            一
          </Text>
          <Text style={styles.num} lines={1}>
            3
          </Text>
          <Picture
            style={styles['icon-complete']}
            source={{
              uri: './images/img_111519_0_2.png',
            }}
            autoScaling={false}
            autoWebp={false}
          />
        </View>
        <View style={styles['col-item1']}>
          <Text style={styles.label} lines={1}>
            二
          </Text>
          <Text style={styles['num-1']} lines={1}>
            4
          </Text>
          <Picture
            style={styles.icon}
            source={{
              uri: './images/img_111519_0_0.png',
            }}
            autoScaling={false}
            autoWebp={false}
          />
        </View>
        <View style={styles['col3-item0']}>
          <Text style={styles.word} lines={1}>
            三
          </Text>
          <Text style={styles['num-2']} lines={1}>
            5
          </Text>
        </View>
        <View style={styles.col4}>
          <Text style={styles['tag-1']} lines={1}>
            XXX
          </Text>
          <Text style={styles['num-3']} lines={1}>
            6
          </Text>
        </View>
        <View style={styles['col3-item1']}>
          <Text style={styles['label-1']} lines={1}>
            五
          </Text>
          <Text style={styles['num-4']} lines={1}>
            7
          </Text>
        </View>
        <View style={styles['col3-item2']}>
          <Text style={styles['word-1']} lines={1}>
            六
          </Text>
          <Text style={styles['num-5']} lines={1}>
            8
          </Text>
        </View>
        <View style={styles['col3-item3']}>
          <Text style={styles['tag-2']} lines={1}>
            日
          </Text>
          <Text style={styles['num-6']} lines={1}>
            9
          </Text>
        </View>
      </View>
    );
  }
}
render(<Block_0 />);
