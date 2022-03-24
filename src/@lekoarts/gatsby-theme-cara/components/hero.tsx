/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "../../../../node_modules/@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"

// @ts-ignore
import Intro from "../sections/intro"

// const generateGrid = () => {
//     let grid = []
//     for (let j = 0; j < 100; ++j) {
//         for (let i = 0; i < 100; ++i) {
//             let left_percent = i + "%"
//             let top_percent = j + "%"
//             grid.push(<Svg icon="box" width={2} stroke color="icon_red" left={left_percent} top={top_percent} />)
//         }
//     }
//     return grid
// }
//
// const grid = generateGrid();
const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
    <div>
        <Divider speed={0.9} offset={offset} factor={factor}>
            <UpDown>
                <Svg icon="box" width={32} stroke color="icon_red" left="60%" top="70%" />
                {/*<Svg icon="box" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />*/}
                <Svg icon="box" width={6} stroke color="icon_green" left="60%" top="15%" />
            </UpDown>
            <UpDownWide>
                <Svg icon="box" hiddenMobile width={16} stroke color="icon_darkest" left="80%" top="10%" />
                <Svg icon="box" width={12}  stroke color="icon_blue" left="90%" top="40%" />
                {/*<Svg icon="box" width={16} stroke color="icon_blue" left="70%" top="90%" />*/}
                <Svg icon="box" width={16} stroke color="icon_blue" left="30%" top="65%" />
                {/*<Svg icon="box" width={16} stroke color="icon_blue" left="28%" top="15%" />*/}
                <Svg icon="box" width={6} stroke color="icon_red" left="75%" top="10%" />
                <Svg icon="box" hiddenMobile width={8} stroke color="icon_blue" left="45%" top="10%" />
            </UpDownWide>
        {/*    {grid.map((image)=> {*/}
        {/*    <div>{image}</div>*/}
        {/*})}*/}
            <Svg icon="box" hiddenMobile width={24} stroke color="icon_darker" left="5%" top="70%" />
            <Svg icon="box" width={6}  stroke color="icon_purple" left="4%" top="20%" />
            {/*<Svg icon="box" width={12}  stroke color="icon_darkest" left="50%" top="60%" />*/}
            <Svg icon="box" width={8}  stroke color="icon_green" left="90%" top="90%" />
            <Svg icon="box" hiddenMobile width={24}  stroke color="icon_darker" left="40%" top="80%" />
            <Svg icon="box" width={8} stroke color="icon_red" left="25%" top="5%" />
            {/*<Svg icon="box" width={64}  stroke color="icon_green" left="95%" top="5%" />*/}
            <Svg icon="box" hiddenMobile width={64} stroke color="icon_purple" left="5%" top="90%" />
            <Svg icon="box" width={6}  stroke color="icon_yellow" left="10%" top="10%" />
            <Svg icon="box" width={12}  stroke color="icon_purple" left="50%" top="30%" />
            {/*<Svg icon="box" width={16} stroke color="icon_darker" left="10%" top="50%" />*/}
            {/*<Svg icon="box" width={8} stroke color="icon_darker" left="80%" top="70%" />*/}
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
            <Inner>
                <Intro />
            </Inner>
        </Content>
    </div>
)

export default Hero
