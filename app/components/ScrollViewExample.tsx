/**
 * Created by Administrator on 2018/5/4.
 */
import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Animated,

} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface Props extends NavigationInjectedProps {
    screen: string;
  }
export default class ScrollViewExample extends Component<Props,any>{
    constructor(props:Props){
        super(props);
        this.state = {
            change:0,
            y: new Animated.Value(0),
        }
    }

    componentDidMount(){
    }
    shouldComponentUpdate(nextProps:Props, nextState:any){
        return true;
    }

    render(){
        return (
           <View>
            <Animated.View style={{width:200,height:this.state.y,backgroundColor:"blue"}}></Animated.View>
            <Text>{this.state.change}</Text>
               <ScrollView
                   scrollEventThrottle={200}
                   onScroll={ Animated.event(
                                        [{ nativeEvent: { contentOffset: { y: this.state.y } } }]
                                    )



            }
               >
                   <Text>1</Text>
                   <Text>2</Text>
                   <Text>3</Text>
                   <Text>4</Text>
                   <Text>5</Text>
                   <Text>6</Text>
                   <Text>7</Text>
                   <Text>8</Text>
                   <Text>9</Text>
                   <Text>10</Text>
                   <Text>11</Text>
                   <Text>12</Text>
                   <Text>13</Text>
                   <Text>14</Text>
                   <Text>15</Text>
                   <Text>16</Text>
                   <Text>17</Text>
                   <Text>18</Text>
                   <Text>19</Text>
                   <Text>20</Text>
                   <Text>21</Text>
                   <Text>22</Text>
                   <Text>23</Text>
                   <Text>24</Text>
                   <Text>25</Text>
                   <Text>26</Text>
                   <Text>27</Text>
                   <Text>28</Text>
                   <Text>29</Text>
                   <Text>30</Text>
                   <Text>31</Text>
                   <Text>32</Text>
                   <Text>33</Text>
                   <Text>34</Text>
                   <Text>35</Text>
                   <Text>36</Text>
                   <Text>37</Text>
                   <Text>38</Text>
                   <Text>39</Text>
                   <Text>40</Text>
                   <Text>41</Text>
                   <Text>42</Text>
                   <Text>43</Text>
                   <Text>44</Text>
                   <Text>45</Text>
                   <Text>46</Text>
                   <Text>47</Text>
                   <Text>48</Text>
                   <Text>49</Text>
                   <Text>50</Text>
                   <Text>51</Text>
                   <Text>52</Text>
                   <Text>53</Text>
                   <Text>54</Text>
                   <Text>55</Text>
                   <Text>56</Text>
                   <Text>57</Text>
                   <Text>58</Text>
                   <Text>59</Text>
                   <Text>60</Text>
               </ScrollView>
           </View>
        )
    }
}