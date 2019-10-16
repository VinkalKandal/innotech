import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
var Chart = require("chart.js");
class Charts extends Component {

    state = {
        dropdownOpen: false,
        dropDownText: "DE",
        val: "Value Units",
        displayArr: [15720, 16530, 18047, 21954, 20289, 20312, 25396, 21186, 21522, 21311, 17948, 20084, 18245, 17930, 19868, 21482, 22588, 20912, 24443, 21895, 20468, 23387, 18366, 21555, 16612, 18219, 21310, 21099, 21563, 23626, 25650, 23020, 23111, 23614, 22642, 27650, 21818, 24306, 26211, 27948, 26857, 29846, 25827, 27752, 26705, 27777, 27139, 31125, 22474, 22211, 25547, 24318, 26682, 28127, 26440, 26943, 23178, 25982, 23960, 30129, 22006, 21994, 25152, 25750, 28999, 25676, 30737, 27498, 25293, 24016, 22737, 28830, 23983, 19501, 23550, 26752, 26724, 24690],
        chart1:true,
        chart2:false
    };

    toggle = (e) => {
        console.log("handle toggle" ,e);
        const { value } = e.target
        this.setState({
            dropDownText: value,
            dropdownOpen: !this.state.dropdownOpen,
            val: value === "DE" ? "Value Units" : "Area Units",
            //displayArr:[1685000, 1785000, 2017000, 2397000, 2226000, 2213000, 2669000, 2279000, 2295000, 2224000, 1898000, 2100000, 1972000, 1924000, 2142000, 2285000, 2402000, 2196000, 2589000, 2323000, 2187000, 2356000, 1938000, 2191000, 1763000, 1907000, 2314000, 2280000, 2264000, 2503000, 2710000, 2490000, 2443000, 2501000, 2297000, 2733000, 2309000, 2449000, 2689000, 2779000, 2651000, 2894000, 2632000, 2671000, 2622000, 2603000, 2564000, 2974000, 2116000, 2194000, 2606000, 2464000, 2738000, 2809000, 2685000, 2707000, 2372000, 2556000, 2340000, 2811000, 2210000, 2189000, 2554000, 2575000, 2818000, 2642000, 3025000, 2702000, 2498000, 2404000, 2274000, 2731000, 2382000, 2064000, 2425000, 2619000, 2739000, 2521000]
            chart1:value==="DE"?true:false,
            chart2:value==="FR"?true:false
        });
        value==="FR"?
        this.updateMap([1685000, 1785000, 2017000, 2397000, 2226000, 2213000, 2669000, 2279000, 2295000, 2224000, 1898000, 2100000, 1972000, 1924000, 2142000, 2285000, 2402000, 2196000, 2589000, 2323000, 2187000, 2356000, 1938000, 2191000, 1763000, 1907000, 2314000, 2280000, 2264000, 2503000, 2710000, 2490000, 2443000, 2501000, 2297000, 2733000, 2309000, 2449000, 2689000, 2779000, 2651000, 2894000, 2632000, 2671000, 2622000, 2603000, 2564000, 2974000, 2116000, 2194000, 2606000, 2464000, 2738000, 2809000, 2685000, 2707000, 2372000, 2556000, 2340000, 2811000, 2210000, 2189000, 2554000, 2575000, 2818000, 2642000, 3025000, 2702000, 2498000, 2404000, 2274000, 2731000, 2382000, 2064000, 2425000, 2619000, 2739000, 2521000])
        :
        this.updateMap1(this.state.displayArr)
    }

    componentDidMount() {
        console.log("in did mount")
        this.updateMap1(this.state.displayArr)
       
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
    }

    handleImportOffer = () => {
        this.fileInput.current.click();
    }

    updateMap1 = (displayArr) => {
        setTimeout(() => {
        console.log("inupdate map updateMap1",displayArr)
        const node = this.node1;
        new Chart(node, {
            type: 'line',
            data: {
                labels: ['Jan.2013', 'Feb.2013', 'Mar.2013', 'Apr.2013', 'May.2013', 'Jun.2013', 'Jul.2013', 'Aug.2013', 'Sep.2013', 'Oct.2013', 'Nov.2013', 'Dec.2013',
                    'Jan.2014', 'Feb.2014', 'Mar.2014', 'Apr.2014', 'May.2014', 'Jun.2014', 'Jul.2014', 'Aug.2014', 'Sep.2014', 'Oct.2014', 'Nov.2014', 'Dec.2014',
                    'Jan.2015', 'Feb.2015', 'Mar.2015', 'Apr.2015', 'May.2015', 'Jun.2015', 'Jul.2015', 'Aug.2015', 'Sep.2015', 'Oct.2015', 'Nov.2015', 'Dec.2015',
                    'Jan.2016', 'Feb.2016', 'Mar.2016', 'Apr.2016', 'May.2016', 'Jun.2016', 'Jul.2016', 'Aug.2016', 'Sep.2016', 'Oct.2016', 'Nov.2016', 'Dec.2016',
                    'Jan.2017', 'Feb.2017', 'Mar.2017', 'Apr.2017', 'May.2017', 'Jun.2017', 'Jul.2017', 'Aug.2017', 'Sep.2017', 'Oct.2017', 'Nov.2017', 'Dec.2017',
                    'Jan.2018', 'Feb.2018', 'Mar.2018', 'Apr.2018', 'May.2018', 'Jun.2018', 'Jul.2018', 'Aug.2018', 'Sep.2018', 'Oct.2018', 'Nov.2018', 'Dec.2018',
                    'Jan.2019', 'Feb.2019', 'Mar.2019', 'Apr.2019', 'May.2019', 'Jun.2019'],
                datasets: [{
                    label: "value units",
                    fill: false,
                    backgroundColor: "#f66284",
                    borderColor: "#f66284",
                    data: displayArr
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Chart with Multiline Labels'
                },
                
            }
        });
    }, 100);
        // return <div>
        //     {/* <canvas
        //         style={{ width: 800, height: 300 }}
        //         ref={node => (this.node = node)}
        //     /> */}
        // </div>
    }

    updateMap = (displayArr) => {
        setTimeout(() => {
            console.log("inupdate map",displayArr)
        const node = this.node2;
        new Chart(node, {
            type: 'line',
            data: {
                labels: ['Jan.2013', 'Feb.2013', 'Mar.2013', 'Apr.2013', 'May.2013', 'Jun.2013', 'Jul.2013', 'Aug.2013', 'Sep.2013', 'Oct.2013', 'Nov.2013', 'Dec.2013',
                    'Jan.2014', 'Feb.2014', 'Mar.2014', 'Apr.2014', 'May.2014', 'Jun.2014', 'Jul.2014', 'Aug.2014', 'Sep.2014', 'Oct.2014', 'Nov.2014', 'Dec.2014',
                    'Jan.2015', 'Feb.2015', 'Mar.2015', 'Apr.2015', 'May.2015', 'Jun.2015', 'Jul.2015', 'Aug.2015', 'Sep.2015', 'Oct.2015', 'Nov.2015', 'Dec.2015',
                    'Jan.2016', 'Feb.2016', 'Mar.2016', 'Apr.2016', 'May.2016', 'Jun.2016', 'Jul.2016', 'Aug.2016', 'Sep.2016', 'Oct.2016', 'Nov.2016', 'Dec.2016',
                    'Jan.2017', 'Feb.2017', 'Mar.2017', 'Apr.2017', 'May.2017', 'Jun.2017', 'Jul.2017', 'Aug.2017', 'Sep.2017', 'Oct.2017', 'Nov.2017', 'Dec.2017',
                    'Jan.2018', 'Feb.2018', 'Mar.2018', 'Apr.2018', 'May.2018', 'Jun.2018', 'Jul.2018', 'Aug.2018', 'Sep.2018', 'Oct.2018', 'Nov.2018', 'Dec.2018',
                    'Jan.2019', 'Feb.2019', 'Mar.2019', 'Apr.2019', 'May.2019', 'Jun.2019'],
                datasets: [{
                    label: "Area Units",
                    fill: false,
                    backgroundColor: "#f66284",
                    borderColor: "#f66284",
                    data: displayArr
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Chart with Multiline Labels'
                },
                
            }
        });
          }, 100);
        
        // return <div>
        //     {/* <canvas
        //         style={{ width: 800, height: 300 }}
        //         ref={node => (this.node = node)}
        //     /> */}
        // </div>
    }
    render() {
        const { dropDownText ,chart1,chart2} = this.state
        console.log("chart2",this.state)
        return (
            <div>
                {chart1 ?
                <canvas
                    // style={{ width: 800, height: 300 }}
                    ref={node1 => (this.node1 = node1)}
                />:null}
                {chart2?
                <canvas className="dd"
                // style={{ width: 800, height: 300 }}
                ref={node2 => (this.node2 = node2)}
            />:null}
                
                <UncontrolledDropdown>
                    <DropdownToggle caret>
                        {dropDownText}
                    </DropdownToggle>
                    <DropdownMenu onChange={this.toggle}>
                        <DropdownItem onClick={this.toggle} value="DE">DE</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.toggle} value="FR">FR</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default Charts;