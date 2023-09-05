export default{
    template:`
<span>most updated NCAA RPI RANKING YOU WILL EVER FIND. LAST UPDATE 9/5/2023</span>


  <div class="col-md-3">
      <div class="mb-3">
        <label for="conf">Show selected conference only:</label>
        <select id="conf" class="form-select" v-model="conf">
          <option>ALL CONFERENCE</option>
          <option v-for="conf in allConf" :key="conf" :value="conf">{{ conf }}</option>
        </select>
      </div>
    </div>

<table border="1" class="dataframe">
<thead>
<tr style="text-align: right;">
<th>Rank</th>
<th>School Image</th>
<th>School</th>
<th>Win</th>
<th>Lost</th>
<th>PCT</th>
<th>RPI</th>
</tr>
</thead>
<tbody>
<tr id="Wisconsin" v-if='shouldDisplay("Wisconsin")'>
<td>1</td>
<td><img src="https://fantasyvball.github.io/assets/Wisconsin.svg"/></td>
<td>Wisconsin</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.9291</td>
</tr>
<tr id="Georgia Tech" v-if='shouldDisplay("Georgia Tech")'>
<td>2</td>
<td><img src="https://fantasyvball.github.io/assets/Georgia Tech.svg"/></td>
<td>Georgia Tech</td>
<td>4</td>
<td>0</td>
<td>1.000000</td>
<td>0.9009</td>
</tr>
<tr id="Florida" v-if='shouldDisplay("Florida")'>
<td>3</td>
<td><img src="https://fantasyvball.github.io/assets/Florida.svg"/></td>
<td>Florida</td>
<td>4</td>
<td>0</td>
<td>1.000000</td>
<td>0.8652</td>
</tr>
<tr id="Arizona St." v-if='shouldDisplay("Arizona St.")'>
<td>4</td>
<td><img src="https://fantasyvball.github.io/assets/Arizona St..svg"/></td>
<td>Arizona St.</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.8599</td>
</tr>
<tr id="South Carolina" v-if='shouldDisplay("South Carolina")'>
<td>5</td>
<td><img src="https://fantasyvball.github.io/assets/South Carolina.svg"/></td>
<td>South Carolina</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.8494</td>
</tr>
<tr id="Texas Tech" v-if='shouldDisplay("Texas Tech")'>
<td>6</td>
<td><img src="https://fantasyvball.github.io/assets/Texas Tech.svg"/></td>
<td>Texas Tech</td>
<td>6</td>
<td>1</td>
<td>0.857143</td>
<td>0.8152</td>
</tr>
<tr id="Nebraska" v-if='shouldDisplay("Nebraska")'>
<td>7</td>
<td><img src="https://fantasyvball.github.io/assets/Nebraska.svg"/></td>
<td>Nebraska</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.8081</td>
</tr>
<tr id="Southern Ill." v-if='shouldDisplay("Southern Ill.")'>
<td>8</td>
<td><img src="https://fantasyvball.github.io/assets/Southern Ill..svg"/></td>
<td>Southern Ill.</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7914</td>
</tr>
<tr id="Stanford" v-if='shouldDisplay("Stanford")'>
<td>9</td>
<td><img src="https://fantasyvball.github.io/assets/Stanford.svg"/></td>
<td>Stanford</td>
<td>3</td>
<td>1</td>
<td>0.750000</td>
<td>0.7893</td>
</tr>
<tr id="Oregon" v-if='shouldDisplay("Oregon")'>
<td>10</td>
<td><img src="https://fantasyvball.github.io/assets/Oregon.svg"/></td>
<td>Oregon</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7881</td>
</tr>
<tr id="Notre Dame" v-if='shouldDisplay("Notre Dame")'>
<td>11</td>
<td><img src="https://fantasyvball.github.io/assets/Notre Dame.svg"/></td>
<td>Notre Dame</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.7831</td>
</tr>
<tr id="UT Arlington" v-if='shouldDisplay("UT Arlington")'>
<td>12</td>
<td><img src="https://fantasyvball.github.io/assets/UT Arlington.svg"/></td>
<td>UT Arlington</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7823</td>
</tr>
<tr id="Louisville" v-if='shouldDisplay("Louisville")'>
<td>13</td>
<td><img src="https://fantasyvball.github.io/assets/Louisville.svg"/></td>
<td>Louisville</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7759</td>
</tr>
<tr id="Western Mich." v-if='shouldDisplay("Western Mich.")'>
<td>14</td>
<td><img src="https://fantasyvball.github.io/assets/Western Mich..svg"/></td>
<td>Western Mich.</td>
<td>7</td>
<td>0</td>
<td>1.000000</td>
<td>0.7728</td>
</tr>
<tr id="Penn St." v-if='shouldDisplay("Penn St.")'>
<td>15</td>
<td><img src="https://fantasyvball.github.io/assets/Penn St..svg"/></td>
<td>Penn St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7717</td>
</tr>
<tr id="Texas St." v-if='shouldDisplay("Texas St.")'>
<td>16</td>
<td><img src="https://fantasyvball.github.io/assets/Texas St..svg"/></td>
<td>Texas St.</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7706</td>
</tr>
<tr id="UTEP" v-if='shouldDisplay("UTEP")'>
<td>17</td>
<td><img src="https://fantasyvball.github.io/assets/UTEP.svg"/></td>
<td>UTEP</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7706</td>
</tr>
<tr id="Ohio" v-if='shouldDisplay("Ohio")'>
<td>18</td>
<td><img src="https://fantasyvball.github.io/assets/Ohio.svg"/></td>
<td>Ohio</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7696</td>
</tr>
<tr id="St. John's (NY)" v-if="shouldDisplay(&quot;St. John's (NY)&quot;)">
<td>19</td>
<td><img src="https://fantasyvball.github.io/assets/St. John's (NY).svg"/></td>
<td>St. John's (NY)</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7696</td>
</tr>
<tr id="South Alabama" v-if='shouldDisplay("South Alabama")'>
<td>20</td>
<td><img src="https://fantasyvball.github.io/assets/South Alabama.svg"/></td>
<td>South Alabama</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7673</td>
</tr>
<tr id="Dayton" v-if='shouldDisplay("Dayton")'>
<td>21</td>
<td><img src="https://fantasyvball.github.io/assets/Dayton.svg"/></td>
<td>Dayton</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7664</td>
</tr>
<tr id="Tennessee" v-if='shouldDisplay("Tennessee")'>
<td>22</td>
<td><img src="https://fantasyvball.github.io/assets/Tennessee.svg"/></td>
<td>Tennessee</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7627</td>
</tr>
<tr id="Arkansas" v-if='shouldDisplay("Arkansas")'>
<td>23</td>
<td><img src="https://fantasyvball.github.io/assets/Arkansas.svg"/></td>
<td>Arkansas</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7581</td>
</tr>
<tr id="Furman" v-if='shouldDisplay("Furman")'>
<td>24</td>
<td><img src="https://fantasyvball.github.io/assets/Furman.svg"/></td>
<td>Furman</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7581</td>
</tr>
<tr id="Utah St." v-if='shouldDisplay("Utah St.")'>
<td>25</td>
<td><img src="https://fantasyvball.github.io/assets/Utah St..svg"/></td>
<td>Utah St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7581</td>
</tr>
<tr id="Villanova" v-if='shouldDisplay("Villanova")'>
<td>26</td>
<td><img src="https://fantasyvball.github.io/assets/Villanova.svg"/></td>
<td>Villanova</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7581</td>
</tr>
<tr id="Wake Forest" v-if='shouldDisplay("Wake Forest")'>
<td>27</td>
<td><img src="https://fantasyvball.github.io/assets/Wake Forest.svg"/></td>
<td>Wake Forest</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7581</td>
</tr>
<tr id="Virginia Tech" v-if='shouldDisplay("Virginia Tech")'>
<td>28</td>
<td><img src="https://fantasyvball.github.io/assets/Virginia Tech.svg"/></td>
<td>Virginia Tech</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7500</td>
</tr>
<tr id="North Carolina" v-if='shouldDisplay("North Carolina")'>
<td>29</td>
<td><img src="https://fantasyvball.github.io/assets/North Carolina.svg"/></td>
<td>North Carolina</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7497</td>
</tr>
<tr id="Alabama" v-if='shouldDisplay("Alabama")'>
<td>30</td>
<td><img src="https://fantasyvball.github.io/assets/Alabama.svg"/></td>
<td>Alabama</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7494</td>
</tr>
<tr id="Buffalo" v-if='shouldDisplay("Buffalo")'>
<td>31</td>
<td><img src="https://fantasyvball.github.io/assets/Buffalo.svg"/></td>
<td>Buffalo</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7494</td>
</tr>
<tr id="BYU" v-if='shouldDisplay("BYU")'>
<td>32</td>
<td><img src="https://fantasyvball.github.io/assets/BYU.svg"/></td>
<td>BYU</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7488</td>
</tr>
<tr id="Pittsburgh" v-if='shouldDisplay("Pittsburgh")'>
<td>33</td>
<td><img src="https://fantasyvball.github.io/assets/Pittsburgh.svg"/></td>
<td>Pittsburgh</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7475</td>
</tr>
<tr id="Auburn" v-if='shouldDisplay("Auburn")'>
<td>34</td>
<td><img src="https://fantasyvball.github.io/assets/Auburn.svg"/></td>
<td>Auburn</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.7472</td>
</tr>
<tr id="Santa Clara" v-if='shouldDisplay("Santa Clara")'>
<td>35</td>
<td><img src="https://fantasyvball.github.io/assets/Santa Clara.svg"/></td>
<td>Santa Clara</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7442</td>
</tr>
<tr id="Eastern Ill." v-if='shouldDisplay("Eastern Ill.")'>
<td>36</td>
<td><img src="https://fantasyvball.github.io/assets/Eastern Ill..svg"/></td>
<td>Eastern Ill.</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7424</td>
</tr>
<tr id="Air Force" v-if='shouldDisplay("Air Force")'>
<td>37</td>
<td><img src="https://fantasyvball.github.io/assets/Air Force.svg"/></td>
<td>Air Force</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7406</td>
</tr>
<tr id="UIC" v-if='shouldDisplay("UIC")'>
<td>38</td>
<td><img src="https://fantasyvball.github.io/assets/UIC.svg"/></td>
<td>UIC</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7406</td>
</tr>
<tr id="Clemson" v-if='shouldDisplay("Clemson")'>
<td>39</td>
<td><img src="https://fantasyvball.github.io/assets/Clemson.svg"/></td>
<td>Clemson</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7395</td>
</tr>
<tr id="SMU" v-if='shouldDisplay("SMU")'>
<td>40</td>
<td><img src="https://fantasyvball.github.io/assets/SMU.svg"/></td>
<td>SMU</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.7390</td>
</tr>
<tr id="Towson" v-if='shouldDisplay("Towson")'>
<td>41</td>
<td><img src="https://fantasyvball.github.io/assets/Towson.svg"/></td>
<td>Towson</td>
<td>6</td>
<td>1</td>
<td>0.857143</td>
<td>0.7390</td>
</tr>
<tr id="Hawaii" v-if='shouldDisplay("Hawaii")'>
<td>42</td>
<td><img src="https://fantasyvball.github.io/assets/Hawaii.svg"/></td>
<td>Hawaii</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7358</td>
</tr>
<tr id="Wyoming" v-if='shouldDisplay("Wyoming")'>
<td>43</td>
<td><img src="https://fantasyvball.github.io/assets/Wyoming.svg"/></td>
<td>Wyoming</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7353</td>
</tr>
<tr id="App State" v-if='shouldDisplay("App State")'>
<td>44</td>
<td><img src="https://fantasyvball.github.io/assets/App State.svg"/></td>
<td>App State</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7339</td>
</tr>
<tr id="Sacramento St." v-if='shouldDisplay("Sacramento St.")'>
<td>45</td>
<td><img src="https://fantasyvball.github.io/assets/Sacramento St..svg"/></td>
<td>Sacramento St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7331</td>
</tr>
<tr id="Old Dominion" v-if='shouldDisplay("Old Dominion")'>
<td>46</td>
<td><img src="https://fantasyvball.github.io/assets/Old Dominion.svg"/></td>
<td>Old Dominion</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7324</td>
</tr>
<tr id="Saint Mary's (CA)" v-if="shouldDisplay(&quot;Saint Mary's (CA)&quot;)">
<td>47</td>
<td><img src="https://fantasyvball.github.io/assets/Saint Mary's (CA).svg"/></td>
<td>Saint Mary's (CA)</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.7281</td>
</tr>
<tr id="Oregon St." v-if='shouldDisplay("Oregon St.")'>
<td>48</td>
<td><img src="https://fantasyvball.github.io/assets/Oregon St..svg"/></td>
<td>Oregon St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7262</td>
</tr>
<tr id="Southeast Mo. St." v-if='shouldDisplay("Southeast Mo. St.")'>
<td>49</td>
<td><img src="https://fantasyvball.github.io/assets/Southeast Mo. St..svg"/></td>
<td>Southeast Mo. St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7262</td>
</tr>
<tr id="Creighton" v-if='shouldDisplay("Creighton")'>
<td>50</td>
<td><img src="https://fantasyvball.github.io/assets/Creighton.svg"/></td>
<td>Creighton</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7257</td>
</tr>
<tr id="Colorado" v-if='shouldDisplay("Colorado")'>
<td>51</td>
<td><img src="https://fantasyvball.github.io/assets/Colorado.svg"/></td>
<td>Colorado</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7250</td>
</tr>
<tr id="UC Davis" v-if='shouldDisplay("UC Davis")'>
<td>52</td>
<td><img src="https://fantasyvball.github.io/assets/UC Davis.svg"/></td>
<td>UC Davis</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7206</td>
</tr>
<tr id="Liberty" v-if='shouldDisplay("Liberty")'>
<td>53</td>
<td><img src="https://fantasyvball.github.io/assets/Liberty.svg"/></td>
<td>Liberty</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7196</td>
</tr>
<tr id="Evansville" v-if='shouldDisplay("Evansville")'>
<td>54</td>
<td><img src="https://fantasyvball.github.io/assets/Evansville.svg"/></td>
<td>Evansville</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7189</td>
</tr>
<tr id="Washington" v-if='shouldDisplay("Washington")'>
<td>55</td>
<td><img src="https://fantasyvball.github.io/assets/Washington.svg"/></td>
<td>Washington</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7189</td>
</tr>
<tr id="Miami (FL)" v-if='shouldDisplay("Miami (FL)")'>
<td>56</td>
<td><img src="https://fantasyvball.github.io/assets/Miami (FL).svg"/></td>
<td>Miami (FL)</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7181</td>
</tr>
<tr id="James Madison" v-if='shouldDisplay("James Madison")'>
<td>57</td>
<td><img src="https://fantasyvball.github.io/assets/James Madison.svg"/></td>
<td>James Madison</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7178</td>
</tr>
<tr id="Kansas City" v-if='shouldDisplay("Kansas City")'>
<td>58</td>
<td><img src="https://fantasyvball.github.io/assets/Kansas City.svg"/></td>
<td>Kansas City</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7177</td>
</tr>
<tr id="Purdue" v-if='shouldDisplay("Purdue")'>
<td>59</td>
<td><img src="https://fantasyvball.github.io/assets/Purdue.svg"/></td>
<td>Purdue</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7176</td>
</tr>
<tr id="Mississippi St." v-if='shouldDisplay("Mississippi St.")'>
<td>60</td>
<td><img src="https://fantasyvball.github.io/assets/Mississippi St..svg"/></td>
<td>Mississippi St.</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7167</td>
</tr>
<tr id="Georgetown" v-if='shouldDisplay("Georgetown")'>
<td>61</td>
<td><img src="https://fantasyvball.github.io/assets/Georgetown.svg"/></td>
<td>Georgetown</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7164</td>
</tr>
<tr id="UCF" v-if='shouldDisplay("UCF")'>
<td>62</td>
<td><img src="https://fantasyvball.github.io/assets/UCF.svg"/></td>
<td>UCF</td>
<td>6</td>
<td>1</td>
<td>0.857143</td>
<td>0.7152</td>
</tr>
<tr id="Delaware" v-if='shouldDisplay("Delaware")'>
<td>63</td>
<td><img src="https://fantasyvball.github.io/assets/Delaware.svg"/></td>
<td>Delaware</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.7150</td>
</tr>
<tr id="Harvard" v-if='shouldDisplay("Harvard")'>
<td>64</td>
<td><img src="https://fantasyvball.github.io/assets/Harvard.svg"/></td>
<td>Harvard</td>
<td>3</td>
<td>0</td>
<td>1.000000</td>
<td>0.7139</td>
</tr>
<tr id="Houston Christian" v-if='shouldDisplay("Houston Christian")'>
<td>65</td>
<td><img src="https://fantasyvball.github.io/assets/Houston Christian.svg"/></td>
<td>Houston Christian</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.7134</td>
</tr>
<tr id="Texas A&amp;M" v-if='shouldDisplay("Texas A&amp;M")'>
<td>66</td>
<td><img src="https://fantasyvball.github.io/assets/Texas A&amp;M.svg"/></td>
<td>Texas A&amp;M</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.7126</td>
</tr>
<tr id="Lehigh" v-if='shouldDisplay("Lehigh")'>
<td>67</td>
<td><img src="https://fantasyvball.github.io/assets/Lehigh.svg"/></td>
<td>Lehigh</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7088</td>
</tr>
<tr id="Austin Peay" v-if='shouldDisplay("Austin Peay")'>
<td>68</td>
<td><img src="https://fantasyvball.github.io/assets/Austin Peay.svg"/></td>
<td>Austin Peay</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7083</td>
</tr>
<tr id="Navy" v-if='shouldDisplay("Navy")'>
<td>69</td>
<td><img src="https://fantasyvball.github.io/assets/Navy.svg"/></td>
<td>Navy</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7083</td>
</tr>
<tr id="Ga. Southern" v-if='shouldDisplay("Ga. Southern")'>
<td>70</td>
<td><img src="https://fantasyvball.github.io/assets/Ga. Southern.svg"/></td>
<td>Ga. Southern</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.7081</td>
</tr>
<tr id="New Mexico" v-if='shouldDisplay("New Mexico")'>
<td>71</td>
<td><img src="https://fantasyvball.github.io/assets/New Mexico.svg"/></td>
<td>New Mexico</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.7081</td>
</tr>
<tr id="Oklahoma" v-if='shouldDisplay("Oklahoma")'>
<td>72</td>
<td><img src="https://fantasyvball.github.io/assets/Oklahoma.svg"/></td>
<td>Oklahoma</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7081</td>
</tr>
<tr id="Rutgers" v-if='shouldDisplay("Rutgers")'>
<td>73</td>
<td><img src="https://fantasyvball.github.io/assets/Rutgers.svg"/></td>
<td>Rutgers</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.7081</td>
</tr>
<tr id="SFA" v-if='shouldDisplay("SFA")'>
<td>74</td>
<td><img src="https://fantasyvball.github.io/assets/SFA.svg"/></td>
<td>SFA</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7071</td>
</tr>
<tr id="UC Santa Barbara" v-if='shouldDisplay("UC Santa Barbara")'>
<td>75</td>
<td><img src="https://fantasyvball.github.io/assets/UC Santa Barbara.svg"/></td>
<td>UC Santa Barbara</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.7064</td>
</tr>
<tr id="Iowa St." v-if='shouldDisplay("Iowa St.")'>
<td>76</td>
<td><img src="https://fantasyvball.github.io/assets/Iowa St..svg"/></td>
<td>Iowa St.</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.7037</td>
</tr>
<tr id="New Mexico St." v-if='shouldDisplay("New Mexico St.")'>
<td>77</td>
<td><img src="https://fantasyvball.github.io/assets/New Mexico St..svg"/></td>
<td>New Mexico St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.7035</td>
</tr>
<tr id="Temple" v-if='shouldDisplay("Temple")'>
<td>78</td>
<td><img src="https://fantasyvball.github.io/assets/Temple.svg"/></td>
<td>Temple</td>
<td>6</td>
<td>1</td>
<td>0.857143</td>
<td>0.7021</td>
</tr>
<tr id="Louisiana" v-if='shouldDisplay("Louisiana")'>
<td>79</td>
<td><img src="https://fantasyvball.github.io/assets/Louisiana.svg"/></td>
<td>Louisiana</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.7009</td>
</tr>
<tr id="UNI" v-if='shouldDisplay("UNI")'>
<td>80</td>
<td><img src="https://fantasyvball.github.io/assets/UNI.svg"/></td>
<td>UNI</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6997</td>
</tr>
<tr id="LMU (CA)" v-if='shouldDisplay("LMU (CA)")'>
<td>81</td>
<td><img src="https://fantasyvball.github.io/assets/LMU (CA).svg"/></td>
<td>LMU (CA)</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6990</td>
</tr>
<tr id="Charlotte" v-if='shouldDisplay("Charlotte")'>
<td>82</td>
<td><img src="https://fantasyvball.github.io/assets/Charlotte.svg"/></td>
<td>Charlotte</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6989</td>
</tr>
<tr id="San Francisco" v-if='shouldDisplay("San Francisco")'>
<td>83</td>
<td><img src="https://fantasyvball.github.io/assets/San Francisco.svg"/></td>
<td>San Francisco</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6985</td>
</tr>
<tr id="Central Mich." v-if='shouldDisplay("Central Mich.")'>
<td>84</td>
<td><img src="https://fantasyvball.github.io/assets/Central Mich..svg"/></td>
<td>Central Mich.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6979</td>
</tr>
<tr id="Fla. Atlantic" v-if='shouldDisplay("Fla. Atlantic")'>
<td>85</td>
<td><img src="https://fantasyvball.github.io/assets/Fla. Atlantic.svg"/></td>
<td>Fla. Atlantic</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.6950</td>
</tr>
<tr id="Pacific" v-if='shouldDisplay("Pacific")'>
<td>86</td>
<td><img src="https://fantasyvball.github.io/assets/Pacific.svg"/></td>
<td>Pacific</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6926</td>
</tr>
<tr id="Saint Louis" v-if='shouldDisplay("Saint Louis")'>
<td>87</td>
<td><img src="https://fantasyvball.github.io/assets/Saint Louis.svg"/></td>
<td>Saint Louis</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6926</td>
</tr>
<tr id="Baylor" v-if='shouldDisplay("Baylor")'>
<td>88</td>
<td><img src="https://fantasyvball.github.io/assets/Baylor.svg"/></td>
<td>Baylor</td>
<td>1</td>
<td>2</td>
<td>0.333333</td>
<td>0.6914</td>
</tr>
<tr id="Cal Poly" v-if='shouldDisplay("Cal Poly")'>
<td>89</td>
<td><img src="https://fantasyvball.github.io/assets/Cal Poly.svg"/></td>
<td>Cal Poly</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6914</td>
</tr>
<tr id="LSU" v-if='shouldDisplay("LSU")'>
<td>90</td>
<td><img src="https://fantasyvball.github.io/assets/LSU.svg"/></td>
<td>LSU</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6914</td>
</tr>
<tr id="Omaha" v-if='shouldDisplay("Omaha")'>
<td>91</td>
<td><img src="https://fantasyvball.github.io/assets/Omaha.svg"/></td>
<td>Omaha</td>
<td>0</td>
<td>4</td>
<td>0.000000</td>
<td>0.6914</td>
</tr>
<tr id="High Point" v-if='shouldDisplay("High Point")'>
<td>92</td>
<td><img src="https://fantasyvball.github.io/assets/High Point.svg"/></td>
<td>High Point</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6908</td>
</tr>
<tr id="Northern Colo." v-if='shouldDisplay("Northern Colo.")'>
<td>93</td>
<td><img src="https://fantasyvball.github.io/assets/Northern Colo..svg"/></td>
<td>Northern Colo.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6908</td>
</tr>
<tr id="Wichita St." v-if='shouldDisplay("Wichita St.")'>
<td>94</td>
<td><img src="https://fantasyvball.github.io/assets/Wichita St..svg"/></td>
<td>Wichita St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6907</td>
</tr>
<tr id="Fordham" v-if='shouldDisplay("Fordham")'>
<td>95</td>
<td><img src="https://fantasyvball.github.io/assets/Fordham.svg"/></td>
<td>Fordham</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.6899</td>
</tr>
<tr id="California" v-if='shouldDisplay("California")'>
<td>96</td>
<td><img src="https://fantasyvball.github.io/assets/California.svg"/></td>
<td>California</td>
<td>5</td>
<td>0</td>
<td>1.000000</td>
<td>0.6881</td>
</tr>
<tr id="FGCU" v-if='shouldDisplay("FGCU")'>
<td>97</td>
<td><img src="https://fantasyvball.github.io/assets/FGCU.svg"/></td>
<td>FGCU</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6840</td>
</tr>
<tr id="San Jose St." v-if='shouldDisplay("San Jose St.")'>
<td>98</td>
<td><img src="https://fantasyvball.github.io/assets/San Jose St..svg"/></td>
<td>San Jose St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6834</td>
</tr>
<tr id="Chattanooga" v-if='shouldDisplay("Chattanooga")'>
<td>99</td>
<td><img src="https://fantasyvball.github.io/assets/Chattanooga.svg"/></td>
<td>Chattanooga</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6831</td>
</tr>
<tr id="UMBC" v-if='shouldDisplay("UMBC")'>
<td>100</td>
<td><img src="https://fantasyvball.github.io/assets/UMBC.svg"/></td>
<td>UMBC</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6808</td>
</tr>
<tr id="UAB" v-if='shouldDisplay("UAB")'>
<td>101</td>
<td><img src="https://fantasyvball.github.io/assets/UAB.svg"/></td>
<td>UAB</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6801</td>
</tr>
<tr id="The Citadel" v-if='shouldDisplay("The Citadel")'>
<td>102</td>
<td><img src="https://fantasyvball.github.io/assets/The Citadel.svg"/></td>
<td>The Citadel</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.6799</td>
</tr>
<tr id="Arizona" v-if='shouldDisplay("Arizona")'>
<td>103</td>
<td><img src="https://fantasyvball.github.io/assets/Arizona.svg"/></td>
<td>Arizona</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6794</td>
</tr>
<tr id="Duke" v-if='shouldDisplay("Duke")'>
<td>104</td>
<td><img src="https://fantasyvball.github.io/assets/Duke.svg"/></td>
<td>Duke</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6789</td>
</tr>
<tr id="Butler" v-if='shouldDisplay("Butler")'>
<td>105</td>
<td><img src="https://fantasyvball.github.io/assets/Butler.svg"/></td>
<td>Butler</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6762</td>
</tr>
<tr id="Minnesota" v-if='shouldDisplay("Minnesota")'>
<td>106</td>
<td><img src="https://fantasyvball.github.io/assets/Minnesota.svg"/></td>
<td>Minnesota</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.6747</td>
</tr>
<tr id="Eastern Ky." v-if='shouldDisplay("Eastern Ky.")'>
<td>107</td>
<td><img src="https://fantasyvball.github.io/assets/Eastern Ky..svg"/></td>
<td>Eastern Ky.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6747</td>
</tr>
<tr id="Loyola Chicago" v-if='shouldDisplay("Loyola Chicago")'>
<td>108</td>
<td><img src="https://fantasyvball.github.io/assets/Loyola Chicago.svg"/></td>
<td>Loyola Chicago</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6747</td>
</tr>
<tr id="Montana St." v-if='shouldDisplay("Montana St.")'>
<td>109</td>
<td><img src="https://fantasyvball.github.io/assets/Montana St..svg"/></td>
<td>Montana St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6733</td>
</tr>
<tr id="Utah" v-if='shouldDisplay("Utah")'>
<td>110</td>
<td><img src="https://fantasyvball.github.io/assets/Utah.svg"/></td>
<td>Utah</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.6725</td>
</tr>
<tr id="Pepperdine" v-if='shouldDisplay("Pepperdine")'>
<td>111</td>
<td><img src="https://fantasyvball.github.io/assets/Pepperdine.svg"/></td>
<td>Pepperdine</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.6717</td>
</tr>
<tr id="San Diego" v-if='shouldDisplay("San Diego")'>
<td>112</td>
<td><img src="https://fantasyvball.github.io/assets/San Diego.svg"/></td>
<td>San Diego</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.6717</td>
</tr>
<tr id="Ohio St." v-if='shouldDisplay("Ohio St.")'>
<td>113</td>
<td><img src="https://fantasyvball.github.io/assets/Ohio St..svg"/></td>
<td>Ohio St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6712</td>
</tr>
<tr id="William &amp; Mary" v-if='shouldDisplay("William &amp; Mary")'>
<td>114</td>
<td><img src="https://fantasyvball.github.io/assets/William &amp; Mary.svg"/></td>
<td>William &amp; Mary</td>
<td>5</td>
<td>2</td>
<td>0.714286</td>
<td>0.6710</td>
</tr>
<tr id="Hofstra" v-if='shouldDisplay("Hofstra")'>
<td>115</td>
<td><img src="https://fantasyvball.github.io/assets/Hofstra.svg"/></td>
<td>Hofstra</td>
<td>6</td>
<td>1</td>
<td>0.857143</td>
<td>0.6697</td>
</tr>
<tr id="Florida St." v-if='shouldDisplay("Florida St.")'>
<td>116</td>
<td><img src="https://fantasyvball.github.io/assets/Florida St..svg"/></td>
<td>Florida St.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6689</td>
</tr>
<tr id="Lindenwood" v-if='shouldDisplay("Lindenwood")'>
<td>117</td>
<td><img src="https://fantasyvball.github.io/assets/Lindenwood.svg"/></td>
<td>Lindenwood</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6667</td>
</tr>
<tr id="Morehead St." v-if='shouldDisplay("Morehead St.")'>
<td>118</td>
<td><img src="https://fantasyvball.github.io/assets/Morehead St..svg"/></td>
<td>Morehead St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6667</td>
</tr>
<tr id="Coppin St." v-if='shouldDisplay("Coppin St.")'>
<td>119</td>
<td><img src="https://fantasyvball.github.io/assets/Coppin St..svg"/></td>
<td>Coppin St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6664</td>
</tr>
<tr id="Jacksonville" v-if='shouldDisplay("Jacksonville")'>
<td>120</td>
<td><img src="https://fantasyvball.github.io/assets/Jacksonville.svg"/></td>
<td>Jacksonville</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6664</td>
</tr>
<tr id="Missouri" v-if='shouldDisplay("Missouri")'>
<td>121</td>
<td><img src="https://fantasyvball.github.io/assets/Missouri.svg"/></td>
<td>Missouri</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6664</td>
</tr>
<tr id="NC State" v-if='shouldDisplay("NC State")'>
<td>122</td>
<td><img src="https://fantasyvball.github.io/assets/NC State.svg"/></td>
<td>NC State</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6664</td>
</tr>
<tr id="Kennesaw St." v-if='shouldDisplay("Kennesaw St.")'>
<td>123</td>
<td><img src="https://fantasyvball.github.io/assets/Kennesaw St..svg"/></td>
<td>Kennesaw St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6661</td>
</tr>
<tr id="Maryland" v-if='shouldDisplay("Maryland")'>
<td>124</td>
<td><img src="https://fantasyvball.github.io/assets/Maryland.svg"/></td>
<td>Maryland</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6661</td>
</tr>
<tr id="Western Ky." v-if='shouldDisplay("Western Ky.")'>
<td>125</td>
<td><img src="https://fantasyvball.github.io/assets/Western Ky..svg"/></td>
<td>Western Ky.</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.6656</td>
</tr>
<tr id="Valparaiso" v-if='shouldDisplay("Valparaiso")'>
<td>126</td>
<td><img src="https://fantasyvball.github.io/assets/Valparaiso.svg"/></td>
<td>Valparaiso</td>
<td>5</td>
<td>2</td>
<td>0.714286</td>
<td>0.6639</td>
</tr>
<tr id="Tulane" v-if='shouldDisplay("Tulane")'>
<td>127</td>
<td><img src="https://fantasyvball.github.io/assets/Tulane.svg"/></td>
<td>Tulane</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6628</td>
</tr>
<tr id="Wright St." v-if='shouldDisplay("Wright St.")'>
<td>128</td>
<td><img src="https://fantasyvball.github.io/assets/Wright St..svg"/></td>
<td>Wright St.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6628</td>
</tr>
<tr id="Marquette" v-if='shouldDisplay("Marquette")'>
<td>129</td>
<td><img src="https://fantasyvball.github.io/assets/Marquette.svg"/></td>
<td>Marquette</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6624</td>
</tr>
<tr id="Quinnipiac" v-if='shouldDisplay("Quinnipiac")'>
<td>130</td>
<td><img src="https://fantasyvball.github.io/assets/Quinnipiac.svg"/></td>
<td>Quinnipiac</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6614</td>
</tr>
<tr id="Seton Hall" v-if='shouldDisplay("Seton Hall")'>
<td>131</td>
<td><img src="https://fantasyvball.github.io/assets/Seton Hall.svg"/></td>
<td>Seton Hall</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6599</td>
</tr>
<tr id="UIW" v-if='shouldDisplay("UIW")'>
<td>132</td>
<td><img src="https://fantasyvball.github.io/assets/UIW.svg"/></td>
<td>UIW</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6599</td>
</tr>
<tr id="Grand Canyon" v-if='shouldDisplay("Grand Canyon")'>
<td>133</td>
<td><img src="https://fantasyvball.github.io/assets/Grand Canyon.svg"/></td>
<td>Grand Canyon</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6589</td>
</tr>
<tr id="Utah Tech" v-if='shouldDisplay("Utah Tech")'>
<td>134</td>
<td><img src="https://fantasyvball.github.io/assets/Utah Tech.svg"/></td>
<td>Utah Tech</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6589</td>
</tr>
<tr id="Davidson" v-if='shouldDisplay("Davidson")'>
<td>135</td>
<td><img src="https://fantasyvball.github.io/assets/Davidson.svg"/></td>
<td>Davidson</td>
<td>6</td>
<td>0</td>
<td>1.000000</td>
<td>0.6581</td>
</tr>
<tr id="Long Beach St." v-if='shouldDisplay("Long Beach St.")'>
<td>136</td>
<td><img src="https://fantasyvball.github.io/assets/Long Beach St..svg"/></td>
<td>Long Beach St.</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6581</td>
</tr>
<tr id="North Dakota St." v-if='shouldDisplay("North Dakota St.")'>
<td>137</td>
<td><img src="https://fantasyvball.github.io/assets/North Dakota St..svg"/></td>
<td>North Dakota St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6581</td>
</tr>
<tr id="Toledo" v-if='shouldDisplay("Toledo")'>
<td>138</td>
<td><img src="https://fantasyvball.github.io/assets/Toledo.svg"/></td>
<td>Toledo</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6581</td>
</tr>
<tr id="Charleston So." v-if='shouldDisplay("Charleston So.")'>
<td>139</td>
<td><img src="https://fantasyvball.github.io/assets/Charleston So..svg"/></td>
<td>Charleston So.</td>
<td>5</td>
<td>2</td>
<td>0.714286</td>
<td>0.6572</td>
</tr>
<tr id="Cleveland St." v-if='shouldDisplay("Cleveland St.")'>
<td>140</td>
<td><img src="https://fantasyvball.github.io/assets/Cleveland St..svg"/></td>
<td>Cleveland St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6569</td>
</tr>
<tr id="Washington St." v-if='shouldDisplay("Washington St.")'>
<td>141</td>
<td><img src="https://fantasyvball.github.io/assets/Washington St..svg"/></td>
<td>Washington St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6561</td>
</tr>
<tr id="South Dakota" v-if='shouldDisplay("South Dakota")'>
<td>142</td>
<td><img src="https://fantasyvball.github.io/assets/South Dakota.svg"/></td>
<td>South Dakota</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.6559</td>
</tr>
<tr id="Xavier" v-if='shouldDisplay("Xavier")'>
<td>143</td>
<td><img src="https://fantasyvball.github.io/assets/Xavier.svg"/></td>
<td>Xavier</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6497</td>
</tr>
<tr id="Iowa" v-if='shouldDisplay("Iowa")'>
<td>144</td>
<td><img src="https://fantasyvball.github.io/assets/Iowa.svg"/></td>
<td>Iowa</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6489</td>
</tr>
<tr id="Utah Valley" v-if='shouldDisplay("Utah Valley")'>
<td>145</td>
<td><img src="https://fantasyvball.github.io/assets/Utah Valley.svg"/></td>
<td>Utah Valley</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.6459</td>
</tr>
<tr id="Bucknell" v-if='shouldDisplay("Bucknell")'>
<td>146</td>
<td><img src="https://fantasyvball.github.io/assets/Bucknell.svg"/></td>
<td>Bucknell</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6457</td>
</tr>
<tr id="Illinois" v-if='shouldDisplay("Illinois")'>
<td>147</td>
<td><img src="https://fantasyvball.github.io/assets/Illinois.svg"/></td>
<td>Illinois</td>
<td>3</td>
<td>1</td>
<td>0.750000</td>
<td>0.6456</td>
</tr>
<tr id="Virginia" v-if='shouldDisplay("Virginia")'>
<td>148</td>
<td><img src="https://fantasyvball.github.io/assets/Virginia.svg"/></td>
<td>Virginia</td>
<td>3</td>
<td>1</td>
<td>0.750000</td>
<td>0.6456</td>
</tr>
<tr id="American" v-if='shouldDisplay("American")'>
<td>149</td>
<td><img src="https://fantasyvball.github.io/assets/American.svg"/></td>
<td>American</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6438</td>
</tr>
<tr id="Loyola Maryland" v-if='shouldDisplay("Loyola Maryland")'>
<td>150</td>
<td><img src="https://fantasyvball.github.io/assets/Loyola Maryland.svg"/></td>
<td>Loyola Maryland</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6423</td>
</tr>
<tr id="Portland St." v-if='shouldDisplay("Portland St.")'>
<td>151</td>
<td><img src="https://fantasyvball.github.io/assets/Portland St..svg"/></td>
<td>Portland St.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6423</td>
</tr>
<tr id="UTRGV" v-if='shouldDisplay("UTRGV")'>
<td>152</td>
<td><img src="https://fantasyvball.github.io/assets/UTRGV.svg"/></td>
<td>UTRGV</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6423</td>
</tr>
<tr id="Weber St." v-if='shouldDisplay("Weber St.")'>
<td>153</td>
<td><img src="https://fantasyvball.github.io/assets/Weber St..svg"/></td>
<td>Weber St.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6423</td>
</tr>
<tr id="Indiana" v-if='shouldDisplay("Indiana")'>
<td>154</td>
<td><img src="https://fantasyvball.github.io/assets/Indiana.svg"/></td>
<td>Indiana</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6417</td>
</tr>
<tr id="Nevada" v-if='shouldDisplay("Nevada")'>
<td>155</td>
<td><img src="https://fantasyvball.github.io/assets/Nevada.svg"/></td>
<td>Nevada</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6414</td>
</tr>
<tr id="DePaul" v-if='shouldDisplay("DePaul")'>
<td>156</td>
<td><img src="https://fantasyvball.github.io/assets/DePaul.svg"/></td>
<td>DePaul</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6407</td>
</tr>
<tr id="Tex. A&amp;M-Commerce" v-if='shouldDisplay("Tex. A&amp;M-Commerce")'>
<td>157</td>
<td><img src="https://fantasyvball.github.io/assets/Tex. A&amp;M-Commerce.svg"/></td>
<td>Tex. A&amp;M-Commerce</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.6403</td>
</tr>
<tr id="Kansas St." v-if='shouldDisplay("Kansas St.")'>
<td>158</td>
<td><img src="https://fantasyvball.github.io/assets/Kansas St..svg"/></td>
<td>Kansas St.</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6399</td>
</tr>
<tr id="Arkansas St." v-if='shouldDisplay("Arkansas St.")'>
<td>159</td>
<td><img src="https://fantasyvball.github.io/assets/Arkansas St..svg"/></td>
<td>Arkansas St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6395</td>
</tr>
<tr id="Bowling Green" v-if='shouldDisplay("Bowling Green")'>
<td>160</td>
<td><img src="https://fantasyvball.github.io/assets/Bowling Green.svg"/></td>
<td>Bowling Green</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6390</td>
</tr>
<tr id="Montana" v-if='shouldDisplay("Montana")'>
<td>161</td>
<td><img src="https://fantasyvball.github.io/assets/Montana.svg"/></td>
<td>Montana</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.6390</td>
</tr>
<tr id="Stetson" v-if='shouldDisplay("Stetson")'>
<td>162</td>
<td><img src="https://fantasyvball.github.io/assets/Stetson.svg"/></td>
<td>Stetson</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6390</td>
</tr>
<tr id="Wofford" v-if='shouldDisplay("Wofford")'>
<td>163</td>
<td><img src="https://fantasyvball.github.io/assets/Wofford.svg"/></td>
<td>Wofford</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6381</td>
</tr>
<tr id="Sam Houston" v-if='shouldDisplay("Sam Houston")'>
<td>164</td>
<td><img src="https://fantasyvball.github.io/assets/Sam Houston.svg"/></td>
<td>Sam Houston</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.6362</td>
</tr>
<tr id="VCU" v-if='shouldDisplay("VCU")'>
<td>165</td>
<td><img src="https://fantasyvball.github.io/assets/VCU.svg"/></td>
<td>VCU</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6353</td>
</tr>
<tr id="UT Martin" v-if='shouldDisplay("UT Martin")'>
<td>166</td>
<td><img src="https://fantasyvball.github.io/assets/UT Martin.svg"/></td>
<td>UT Martin</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6345</td>
</tr>
<tr id="UTSA" v-if='shouldDisplay("UTSA")'>
<td>167</td>
<td><img src="https://fantasyvball.github.io/assets/UTSA.svg"/></td>
<td>UTSA</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6344</td>
</tr>
<tr id="N.C. A&amp;T" v-if='shouldDisplay("N.C. A&amp;T")'>
<td>168</td>
<td><img src="https://fantasyvball.github.io/assets/N.C. A&amp;T.svg"/></td>
<td>N.C. A&amp;T</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.6342</td>
</tr>
<tr id="Cincinnati" v-if='shouldDisplay("Cincinnati")'>
<td>169</td>
<td><img src="https://fantasyvball.github.io/assets/Cincinnati.svg"/></td>
<td>Cincinnati</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6331</td>
</tr>
<tr id="Duquesne" v-if='shouldDisplay("Duquesne")'>
<td>170</td>
<td><img src="https://fantasyvball.github.io/assets/Duquesne.svg"/></td>
<td>Duquesne</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6331</td>
</tr>
<tr id="Northwestern" v-if='shouldDisplay("Northwestern")'>
<td>171</td>
<td><img src="https://fantasyvball.github.io/assets/Northwestern.svg"/></td>
<td>Northwestern</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.6331</td>
</tr>
<tr id="Portland" v-if='shouldDisplay("Portland")'>
<td>172</td>
<td><img src="https://fantasyvball.github.io/assets/Portland.svg"/></td>
<td>Portland</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6331</td>
</tr>
<tr id="South Fla." v-if='shouldDisplay("South Fla.")'>
<td>173</td>
<td><img src="https://fantasyvball.github.io/assets/South Fla..svg"/></td>
<td>South Fla.</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6331</td>
</tr>
<tr id="Texas" v-if='shouldDisplay("Texas")'>
<td>174</td>
<td><img src="https://fantasyvball.github.io/assets/Texas.svg"/></td>
<td>Texas</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.6331</td>
</tr>
<tr id="Houston" v-if='shouldDisplay("Houston")'>
<td>175</td>
<td><img src="https://fantasyvball.github.io/assets/Houston.svg"/></td>
<td>Houston</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6320</td>
</tr>
<tr id="Milwaukee" v-if='shouldDisplay("Milwaukee")'>
<td>176</td>
<td><img src="https://fantasyvball.github.io/assets/Milwaukee.svg"/></td>
<td>Milwaukee</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6317</td>
</tr>
<tr id="Tennessee Tech" v-if='shouldDisplay("Tennessee Tech")'>
<td>177</td>
<td><img src="https://fantasyvball.github.io/assets/Tennessee Tech.svg"/></td>
<td>Tennessee Tech</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6317</td>
</tr>
<tr id="UC San Diego" v-if='shouldDisplay("UC San Diego")'>
<td>178</td>
<td><img src="https://fantasyvball.github.io/assets/UC San Diego.svg"/></td>
<td>UC San Diego</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6316</td>
</tr>
<tr id="Ole Miss" v-if='shouldDisplay("Ole Miss")'>
<td>179</td>
<td><img src="https://fantasyvball.github.io/assets/Ole Miss.svg"/></td>
<td>Ole Miss</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6308</td>
</tr>
<tr id="TCU" v-if='shouldDisplay("TCU")'>
<td>180</td>
<td><img src="https://fantasyvball.github.io/assets/TCU.svg"/></td>
<td>TCU</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6308</td>
</tr>
<tr id="Abilene Christian" v-if='shouldDisplay("Abilene Christian")'>
<td>181</td>
<td><img src="https://fantasyvball.github.io/assets/Abilene Christian.svg"/></td>
<td>Abilene Christian</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6306</td>
</tr>
<tr id="Canisius" v-if='shouldDisplay("Canisius")'>
<td>182</td>
<td><img src="https://fantasyvball.github.io/assets/Canisius.svg"/></td>
<td>Canisius</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6271</td>
</tr>
<tr id="Southern Utah" v-if='shouldDisplay("Southern Utah")'>
<td>183</td>
<td><img src="https://fantasyvball.github.io/assets/Southern Utah.svg"/></td>
<td>Southern Utah</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6271</td>
</tr>
<tr id="Akron" v-if='shouldDisplay("Akron")'>
<td>184</td>
<td><img src="https://fantasyvball.github.io/assets/Akron.svg"/></td>
<td>Akron</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6255</td>
</tr>
<tr id="Youngstown St." v-if='shouldDisplay("Youngstown St.")'>
<td>185</td>
<td><img src="https://fantasyvball.github.io/assets/Youngstown St..svg"/></td>
<td>Youngstown St.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6250</td>
</tr>
<tr id="A&amp;M-Corpus Christi" v-if='shouldDisplay("A&amp;M-Corpus Christi")'>
<td>186</td>
<td><img src="https://fantasyvball.github.io/assets/A&amp;M-Corpus Christi.svg"/></td>
<td>A&amp;M-Corpus Christi</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6247</td>
</tr>
<tr id="Bradley" v-if='shouldDisplay("Bradley")'>
<td>187</td>
<td><img src="https://fantasyvball.github.io/assets/Bradley.svg"/></td>
<td>Bradley</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6247</td>
</tr>
<tr id="IUPUI" v-if='shouldDisplay("IUPUI")'>
<td>188</td>
<td><img src="https://fantasyvball.github.io/assets/IUPUI.svg"/></td>
<td>IUPUI</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6247</td>
</tr>
<tr id="UCLA" v-if='shouldDisplay("UCLA")'>
<td>189</td>
<td><img src="https://fantasyvball.github.io/assets/UCLA.svg"/></td>
<td>UCLA</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6247</td>
</tr>
<tr id="North Texas" v-if='shouldDisplay("North Texas")'>
<td>190</td>
<td><img src="https://fantasyvball.github.io/assets/North Texas.svg"/></td>
<td>North Texas</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6238</td>
</tr>
<tr id="Prairie View" v-if='shouldDisplay("Prairie View")'>
<td>191</td>
<td><img src="https://fantasyvball.github.io/assets/Prairie View.svg"/></td>
<td>Prairie View</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6226</td>
</tr>
<tr id="Iona" v-if='shouldDisplay("Iona")'>
<td>192</td>
<td><img src="https://fantasyvball.github.io/assets/Iona.svg"/></td>
<td>Iona</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.6212</td>
</tr>
<tr id="Mississippi Val." v-if='shouldDisplay("Mississippi Val.")'>
<td>193</td>
<td><img src="https://fantasyvball.github.io/assets/Mississippi Val..svg"/></td>
<td>Mississippi Val.</td>
<td>1</td>
<td>3</td>
<td>0.250000</td>
<td>0.6206</td>
</tr>
<tr id="Missouri St." v-if='shouldDisplay("Missouri St.")'>
<td>194</td>
<td><img src="https://fantasyvball.github.io/assets/Missouri St..svg"/></td>
<td>Missouri St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6183</td>
</tr>
<tr id="Robert Morris" v-if='shouldDisplay("Robert Morris")'>
<td>195</td>
<td><img src="https://fantasyvball.github.io/assets/Robert Morris.svg"/></td>
<td>Robert Morris</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6181</td>
</tr>
<tr id="Rhode Island" v-if='shouldDisplay("Rhode Island")'>
<td>196</td>
<td><img src="https://fantasyvball.github.io/assets/Rhode Island.svg"/></td>
<td>Rhode Island</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.6179</td>
</tr>
<tr id="FIU" v-if='shouldDisplay("FIU")'>
<td>197</td>
<td><img src="https://fantasyvball.github.io/assets/FIU.svg"/></td>
<td>FIU</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.6174</td>
</tr>
<tr id="Chicago St." v-if='shouldDisplay("Chicago St.")'>
<td>198</td>
<td><img src="https://fantasyvball.github.io/assets/Chicago St..svg"/></td>
<td>Chicago St.</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6172</td>
</tr>
<tr id="CSU Bakersfield" v-if='shouldDisplay("CSU Bakersfield")'>
<td>199</td>
<td><img src="https://fantasyvball.github.io/assets/CSU Bakersfield.svg"/></td>
<td>CSU Bakersfield</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6164</td>
</tr>
<tr id="Florida A&amp;M" v-if='shouldDisplay("Florida A&amp;M")'>
<td>200</td>
<td><img src="https://fantasyvball.github.io/assets/Florida A&amp;M.svg"/></td>
<td>Florida A&amp;M</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.6164</td>
</tr>
<tr id="George Mason" v-if='shouldDisplay("George Mason")'>
<td>201</td>
<td><img src="https://fantasyvball.github.io/assets/George Mason.svg"/></td>
<td>George Mason</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6156</td>
</tr>
<tr id="Howard" v-if='shouldDisplay("Howard")'>
<td>202</td>
<td><img src="https://fantasyvball.github.io/assets/Howard.svg"/></td>
<td>Howard</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6152</td>
</tr>
<tr id="Northeastern" v-if='shouldDisplay("Northeastern")'>
<td>203</td>
<td><img src="https://fantasyvball.github.io/assets/Northeastern.svg"/></td>
<td>Northeastern</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.6152</td>
</tr>
<tr id="New Hampshire" v-if='shouldDisplay("New Hampshire")'>
<td>204</td>
<td><img src="https://fantasyvball.github.io/assets/New Hampshire.svg"/></td>
<td>New Hampshire</td>
<td>5</td>
<td>2</td>
<td>0.714286</td>
<td>0.6131</td>
</tr>
<tr id="Kansas" v-if='shouldDisplay("Kansas")'>
<td>205</td>
<td><img src="https://fantasyvball.github.io/assets/Kansas.svg"/></td>
<td>Kansas</td>
<td>3</td>
<td>1</td>
<td>0.750000</td>
<td>0.6122</td>
</tr>
<tr id="Michigan St." v-if='shouldDisplay("Michigan St.")'>
<td>206</td>
<td><img src="https://fantasyvball.github.io/assets/Michigan St..svg"/></td>
<td>Michigan St.</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6122</td>
</tr>
<tr id="Col. of Charleston" v-if='shouldDisplay("Col. of Charleston")'>
<td>207</td>
<td><img src="https://fantasyvball.github.io/assets/Col. of Charleston.svg"/></td>
<td>Col. of Charleston</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.6107</td>
</tr>
<tr id="East Carolina" v-if='shouldDisplay("East Carolina")'>
<td>208</td>
<td><img src="https://fantasyvball.github.io/assets/East Carolina.svg"/></td>
<td>East Carolina</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6099</td>
</tr>
<tr id="Ball St." v-if='shouldDisplay("Ball St.")'>
<td>209</td>
<td><img src="https://fantasyvball.github.io/assets/Ball St..svg"/></td>
<td>Ball St.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6093</td>
</tr>
<tr id="Murray St." v-if='shouldDisplay("Murray St.")'>
<td>210</td>
<td><img src="https://fantasyvball.github.io/assets/Murray St..svg"/></td>
<td>Murray St.</td>
<td>5</td>
<td>1</td>
<td>0.833333</td>
<td>0.6093</td>
</tr>
<tr id="Northern Ky." v-if='shouldDisplay("Northern Ky.")'>
<td>211</td>
<td><img src="https://fantasyvball.github.io/assets/Northern Ky..svg"/></td>
<td>Northern Ky.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6093</td>
</tr>
<tr id="North Ala." v-if='shouldDisplay("North Ala.")'>
<td>212</td>
<td><img src="https://fantasyvball.github.io/assets/North Ala..svg"/></td>
<td>North Ala.</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.6081</td>
</tr>
<tr id="Princeton" v-if='shouldDisplay("Princeton")'>
<td>213</td>
<td><img src="https://fantasyvball.github.io/assets/Princeton.svg"/></td>
<td>Princeton</td>
<td>2</td>
<td>0</td>
<td>1.000000</td>
<td>0.6081</td>
</tr>
<tr id="Samford" v-if='shouldDisplay("Samford")'>
<td>214</td>
<td><img src="https://fantasyvball.github.io/assets/Samford.svg"/></td>
<td>Samford</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.6081</td>
</tr>
<tr id="UConn" v-if='shouldDisplay("UConn")'>
<td>215</td>
<td><img src="https://fantasyvball.github.io/assets/UConn.svg"/></td>
<td>UConn</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6081</td>
</tr>
<tr id="Yale" v-if='shouldDisplay("Yale")'>
<td>216</td>
<td><img src="https://fantasyvball.github.io/assets/Yale.svg"/></td>
<td>Yale</td>
<td>1</td>
<td>2</td>
<td>0.333333</td>
<td>0.6081</td>
</tr>
<tr id="Bellarmine" v-if='shouldDisplay("Bellarmine")'>
<td>217</td>
<td><img src="https://fantasyvball.github.io/assets/Bellarmine.svg"/></td>
<td>Bellarmine</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6070</td>
</tr>
<tr id="USC Upstate" v-if='shouldDisplay("USC Upstate")'>
<td>218</td>
<td><img src="https://fantasyvball.github.io/assets/USC Upstate.svg"/></td>
<td>USC Upstate</td>
<td>4</td>
<td>1</td>
<td>0.800000</td>
<td>0.6062</td>
</tr>
<tr id="Troy" v-if='shouldDisplay("Troy")'>
<td>219</td>
<td><img src="https://fantasyvball.github.io/assets/Troy.svg"/></td>
<td>Troy</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.6059</td>
</tr>
<tr id="Georgia" v-if='shouldDisplay("Georgia")'>
<td>220</td>
<td><img src="https://fantasyvball.github.io/assets/Georgia.svg"/></td>
<td>Georgia</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6033</td>
</tr>
<tr id="Saint Francis (PA)" v-if='shouldDisplay("Saint Francis (PA)")'>
<td>221</td>
<td><img src="https://fantasyvball.github.io/assets/Saint Francis (PA).svg"/></td>
<td>Saint Francis (PA)</td>
<td>4</td>
<td>2</td>
<td>0.666667</td>
<td>0.6022</td>
</tr>
<tr id="Kentucky" v-if='shouldDisplay("Kentucky")'>
<td>222</td>
<td><img src="https://fantasyvball.github.io/assets/Kentucky.svg"/></td>
<td>Kentucky</td>
<td>1</td>
<td>3</td>
<td>0.250000</td>
<td>0.6018</td>
</tr>
<tr id="Gonzaga" v-if='shouldDisplay("Gonzaga")'>
<td>223</td>
<td><img src="https://fantasyvball.github.io/assets/Gonzaga.svg"/></td>
<td>Gonzaga</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6000</td>
</tr>
<tr id="UC Irvine" v-if='shouldDisplay("UC Irvine")'>
<td>224</td>
<td><img src="https://fantasyvball.github.io/assets/UC Irvine.svg"/></td>
<td>UC Irvine</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.6000</td>
</tr>
<tr id="Oakland" v-if='shouldDisplay("Oakland")'>
<td>225</td>
<td><img src="https://fantasyvball.github.io/assets/Oakland.svg"/></td>
<td>Oakland</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5997</td>
</tr>
<tr id="Bryant" v-if='shouldDisplay("Bryant")'>
<td>226</td>
<td><img src="https://fantasyvball.github.io/assets/Bryant.svg"/></td>
<td>Bryant</td>
<td>4</td>
<td>3</td>
<td>0.571429</td>
<td>0.5979</td>
</tr>
<tr id="UNLV" v-if='shouldDisplay("UNLV")'>
<td>227</td>
<td><img src="https://fantasyvball.github.io/assets/UNLV.svg"/></td>
<td>UNLV</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.5972</td>
</tr>
<tr id="Delaware St." v-if='shouldDisplay("Delaware St.")'>
<td>228</td>
<td><img src="https://fantasyvball.github.io/assets/Delaware St..svg"/></td>
<td>Delaware St.</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5960</td>
</tr>
<tr id="Southeastern La." v-if='shouldDisplay("Southeastern La.")'>
<td>229</td>
<td><img src="https://fantasyvball.github.io/assets/Southeastern La..svg"/></td>
<td>Southeastern La.</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.5956</td>
</tr>
<tr id="Colorado St." v-if='shouldDisplay("Colorado St.")'>
<td>230</td>
<td><img src="https://fantasyvball.github.io/assets/Colorado St..svg"/></td>
<td>Colorado St.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5946</td>
</tr>
<tr id="NIU" v-if='shouldDisplay("NIU")'>
<td>231</td>
<td><img src="https://fantasyvball.github.io/assets/NIU.svg"/></td>
<td>NIU</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5914</td>
</tr>
<tr id="UNC Asheville" v-if='shouldDisplay("UNC Asheville")'>
<td>232</td>
<td><img src="https://fantasyvball.github.io/assets/UNC Asheville.svg"/></td>
<td>UNC Asheville</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5914</td>
</tr>
<tr id="Brown" v-if='shouldDisplay("Brown")'>
<td>233</td>
<td><img src="https://fantasyvball.github.io/assets/Brown.svg"/></td>
<td>Brown</td>
<td>3</td>
<td>0</td>
<td>1.000000</td>
<td>0.5914</td>
</tr>
<tr id="Holy Cross" v-if='shouldDisplay("Holy Cross")'>
<td>234</td>
<td><img src="https://fantasyvball.github.io/assets/Holy Cross.svg"/></td>
<td>Holy Cross</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5914</td>
</tr>
<tr id="Jackson St." v-if='shouldDisplay("Jackson St.")'>
<td>235</td>
<td><img src="https://fantasyvball.github.io/assets/Jackson St..svg"/></td>
<td>Jackson St.</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.5914</td>
</tr>
<tr id="Louisiana Tech" v-if='shouldDisplay("Louisiana Tech")'>
<td>236</td>
<td><img src="https://fantasyvball.github.io/assets/Louisiana Tech.svg"/></td>
<td>Louisiana Tech</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5914</td>
</tr>
<tr id="McNeese" v-if='shouldDisplay("McNeese")'>
<td>237</td>
<td><img src="https://fantasyvball.github.io/assets/McNeese.svg"/></td>
<td>McNeese</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5914</td>
</tr>
<tr id="Mercer" v-if='shouldDisplay("Mercer")'>
<td>238</td>
<td><img src="https://fantasyvball.github.io/assets/Mercer.svg"/></td>
<td>Mercer</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5914</td>
</tr>
<tr id="Oral Roberts" v-if='shouldDisplay("Oral Roberts")'>
<td>239</td>
<td><img src="https://fantasyvball.github.io/assets/Oral Roberts.svg"/></td>
<td>Oral Roberts</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5914</td>
</tr>
<tr id="West Virginia" v-if='shouldDisplay("West Virginia")'>
<td>240</td>
<td><img src="https://fantasyvball.github.io/assets/West Virginia.svg"/></td>
<td>West Virginia</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5914</td>
</tr>
<tr id="Morgan St." v-if='shouldDisplay("Morgan St.")'>
<td>241</td>
<td><img src="https://fantasyvball.github.io/assets/Morgan St..svg"/></td>
<td>Morgan St.</td>
<td>2</td>
<td>6</td>
<td>0.250000</td>
<td>0.5908</td>
</tr>
<tr id="SIUE" v-if='shouldDisplay("SIUE")'>
<td>242</td>
<td><img src="https://fantasyvball.github.io/assets/SIUE.svg"/></td>
<td>SIUE</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5901</td>
</tr>
<tr id="Binghamton" v-if='shouldDisplay("Binghamton")'>
<td>243</td>
<td><img src="https://fantasyvball.github.io/assets/Binghamton.svg"/></td>
<td>Binghamton</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5900</td>
</tr>
<tr id="Georgia St." v-if='shouldDisplay("Georgia St.")'>
<td>244</td>
<td><img src="https://fantasyvball.github.io/assets/Georgia St..svg"/></td>
<td>Georgia St.</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5900</td>
</tr>
<tr id="Tulsa" v-if='shouldDisplay("Tulsa")'>
<td>245</td>
<td><img src="https://fantasyvball.github.io/assets/Tulsa.svg"/></td>
<td>Tulsa</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.5888</td>
</tr>
<tr id="Middle Tenn." v-if='shouldDisplay("Middle Tenn.")'>
<td>246</td>
<td><img src="https://fantasyvball.github.io/assets/Middle Tenn..svg"/></td>
<td>Middle Tenn.</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.5872</td>
</tr>
<tr id="Boston College" v-if='shouldDisplay("Boston College")'>
<td>247</td>
<td><img src="https://fantasyvball.github.io/assets/Boston College.svg"/></td>
<td>Boston College</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5868</td>
</tr>
<tr id="Tarleton St." v-if='shouldDisplay("Tarleton St.")'>
<td>248</td>
<td><img src="https://fantasyvball.github.io/assets/Tarleton St..svg"/></td>
<td>Tarleton St.</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5858</td>
</tr>
<tr id="Marist" v-if='shouldDisplay("Marist")'>
<td>249</td>
<td><img src="https://fantasyvball.github.io/assets/Marist.svg"/></td>
<td>Marist</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5833</td>
</tr>
<tr id="UNCW" v-if='shouldDisplay("UNCW")'>
<td>250</td>
<td><img src="https://fantasyvball.github.io/assets/UNCW.svg"/></td>
<td>UNCW</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5828</td>
</tr>
<tr id="Miami (OH)" v-if='shouldDisplay("Miami (OH)")'>
<td>251</td>
<td><img src="https://fantasyvball.github.io/assets/Miami (OH).svg"/></td>
<td>Miami (OH)</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5821</td>
</tr>
<tr id="Belmont" v-if='shouldDisplay("Belmont")'>
<td>252</td>
<td><img src="https://fantasyvball.github.io/assets/Belmont.svg"/></td>
<td>Belmont</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5814</td>
</tr>
<tr id="North Florida" v-if='shouldDisplay("North Florida")'>
<td>253</td>
<td><img src="https://fantasyvball.github.io/assets/North Florida.svg"/></td>
<td>North Florida</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5814</td>
</tr>
<tr id="Michigan" v-if='shouldDisplay("Michigan")'>
<td>254</td>
<td><img src="https://fantasyvball.github.io/assets/Michigan.svg"/></td>
<td>Michigan</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.5789</td>
</tr>
<tr id="Marshall" v-if='shouldDisplay("Marshall")'>
<td>255</td>
<td><img src="https://fantasyvball.github.io/assets/Marshall.svg"/></td>
<td>Marshall</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5773</td>
</tr>
<tr id="Western Caro." v-if='shouldDisplay("Western Caro.")'>
<td>256</td>
<td><img src="https://fantasyvball.github.io/assets/Western Caro..svg"/></td>
<td>Western Caro.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5756</td>
</tr>
<tr id="Coastal Carolina" v-if='shouldDisplay("Coastal Carolina")'>
<td>257</td>
<td><img src="https://fantasyvball.github.io/assets/Coastal Carolina.svg"/></td>
<td>Coastal Carolina</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5747</td>
</tr>
<tr id="Drake" v-if='shouldDisplay("Drake")'>
<td>258</td>
<td><img src="https://fantasyvball.github.io/assets/Drake.svg"/></td>
<td>Drake</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5747</td>
</tr>
<tr id="Green Bay" v-if='shouldDisplay("Green Bay")'>
<td>259</td>
<td><img src="https://fantasyvball.github.io/assets/Green Bay.svg"/></td>
<td>Green Bay</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5747</td>
</tr>
<tr id="UAlbany" v-if='shouldDisplay("UAlbany")'>
<td>260</td>
<td><img src="https://fantasyvball.github.io/assets/UAlbany.svg"/></td>
<td>UAlbany</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5739</td>
</tr>
<tr id="Purdue Fort Wayne" v-if='shouldDisplay("Purdue Fort Wayne")'>
<td>261</td>
<td><img src="https://fantasyvball.github.io/assets/Purdue Fort Wayne.svg"/></td>
<td>Purdue Fort Wayne</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5727</td>
</tr>
<tr id="Memphis" v-if='shouldDisplay("Memphis")'>
<td>262</td>
<td><img src="https://fantasyvball.github.io/assets/Memphis.svg"/></td>
<td>Memphis</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5722</td>
</tr>
<tr id="Gardner-Webb" v-if='shouldDisplay("Gardner-Webb")'>
<td>263</td>
<td><img src="https://fantasyvball.github.io/assets/Gardner-Webb.svg"/></td>
<td>Gardner-Webb</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.5686</td>
</tr>
<tr id="Presbyterian" v-if='shouldDisplay("Presbyterian")'>
<td>264</td>
<td><img src="https://fantasyvball.github.io/assets/Presbyterian.svg"/></td>
<td>Presbyterian</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5684</td>
</tr>
<tr id="Colgate" v-if='shouldDisplay("Colgate")'>
<td>265</td>
<td><img src="https://fantasyvball.github.io/assets/Colgate.svg"/></td>
<td>Colgate</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5672</td>
</tr>
<tr id="Indiana St." v-if='shouldDisplay("Indiana St.")'>
<td>266</td>
<td><img src="https://fantasyvball.github.io/assets/Indiana St..svg"/></td>
<td>Indiana St.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5672</td>
</tr>
<tr id="Fairfield" v-if='shouldDisplay("Fairfield")'>
<td>267</td>
<td><img src="https://fantasyvball.github.io/assets/Fairfield.svg"/></td>
<td>Fairfield</td>
<td>3</td>
<td>2</td>
<td>0.600000</td>
<td>0.5672</td>
</tr>
<tr id="St. Thomas (MN)" v-if='shouldDisplay("St. Thomas (MN)")'>
<td>268</td>
<td><img src="https://fantasyvball.github.io/assets/St. Thomas (MN).svg"/></td>
<td>St. Thomas (MN)</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5664</td>
</tr>
<tr id="California Baptist" v-if='shouldDisplay("California Baptist")'>
<td>269</td>
<td><img src="https://fantasyvball.github.io/assets/California Baptist.svg"/></td>
<td>California Baptist</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5655</td>
</tr>
<tr id="Stony Brook" v-if='shouldDisplay("Stony Brook")'>
<td>270</td>
<td><img src="https://fantasyvball.github.io/assets/Stony Brook.svg"/></td>
<td>Stony Brook</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5655</td>
</tr>
<tr id="ULM" v-if='shouldDisplay("ULM")'>
<td>271</td>
<td><img src="https://fantasyvball.github.io/assets/ULM.svg"/></td>
<td>ULM</td>
<td>1</td>
<td>6</td>
<td>0.142857</td>
<td>0.5640</td>
</tr>
<tr id="Boise St." v-if='shouldDisplay("Boise St.")'>
<td>272</td>
<td><img src="https://fantasyvball.github.io/assets/Boise St..svg"/></td>
<td>Boise St.</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.5616</td>
</tr>
<tr id="Jacksonville St." v-if='shouldDisplay("Jacksonville St.")'>
<td>273</td>
<td><img src="https://fantasyvball.github.io/assets/Jacksonville St..svg"/></td>
<td>Jacksonville St.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5590</td>
</tr>
<tr id="Campbell" v-if='shouldDisplay("Campbell")'>
<td>274</td>
<td><img src="https://fantasyvball.github.io/assets/Campbell.svg"/></td>
<td>Campbell</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5584</td>
</tr>
<tr id="Lipscomb" v-if='shouldDisplay("Lipscomb")'>
<td>275</td>
<td><img src="https://fantasyvball.github.io/assets/Lipscomb.svg"/></td>
<td>Lipscomb</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.5581</td>
</tr>
<tr id="Queens (NC)" v-if='shouldDisplay("Queens (NC)")'>
<td>276</td>
<td><img src="https://fantasyvball.github.io/assets/Queens (NC).svg"/></td>
<td>Queens (NC)</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5581</td>
</tr>
<tr id="Southern California" v-if='shouldDisplay("Southern California")'>
<td>277</td>
<td><img src="https://fantasyvball.github.io/assets/Southern California.svg"/></td>
<td>Southern California</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.5581</td>
</tr>
<tr id="Southern Ind." v-if='shouldDisplay("Southern Ind.")'>
<td>278</td>
<td><img src="https://fantasyvball.github.io/assets/Southern Ind..svg"/></td>
<td>Southern Ind.</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.5581</td>
</tr>
<tr id="Merrimack" v-if='shouldDisplay("Merrimack")'>
<td>279</td>
<td><img src="https://fantasyvball.github.io/assets/Merrimack.svg"/></td>
<td>Merrimack</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5578</td>
</tr>
<tr id="UMES" v-if='shouldDisplay("UMES")'>
<td>280</td>
<td><img src="https://fantasyvball.github.io/assets/UMES.svg"/></td>
<td>UMES</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5564</td>
</tr>
<tr id="Army West Point" v-if='shouldDisplay("Army West Point")'>
<td>281</td>
<td><img src="https://fantasyvball.github.io/assets/Army West Point.svg"/></td>
<td>Army West Point</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5497</td>
</tr>
<tr id="Columbia" v-if='shouldDisplay("Columbia")'>
<td>282</td>
<td><img src="https://fantasyvball.github.io/assets/Columbia.svg"/></td>
<td>Columbia</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.5497</td>
</tr>
<tr id="San Diego St." v-if='shouldDisplay("San Diego St.")'>
<td>283</td>
<td><img src="https://fantasyvball.github.io/assets/San Diego St..svg"/></td>
<td>San Diego St.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5497</td>
</tr>
<tr id="Seattle U" v-if='shouldDisplay("Seattle U")'>
<td>284</td>
<td><img src="https://fantasyvball.github.io/assets/Seattle U.svg"/></td>
<td>Seattle U</td>
<td>3</td>
<td>3</td>
<td>0.500000</td>
<td>0.5497</td>
</tr>
<tr id="LIU" v-if='shouldDisplay("LIU")'>
<td>285</td>
<td><img src="https://fantasyvball.github.io/assets/LIU.svg"/></td>
<td>LIU</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5484</td>
</tr>
<tr id="Dartmouth" v-if='shouldDisplay("Dartmouth")'>
<td>286</td>
<td><img src="https://fantasyvball.github.io/assets/Dartmouth.svg"/></td>
<td>Dartmouth</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.5475</td>
</tr>
<tr id="CSUN" v-if='shouldDisplay("CSUN")'>
<td>287</td>
<td><img src="https://fantasyvball.github.io/assets/CSUN.svg"/></td>
<td>CSUN</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.5462</td>
</tr>
<tr id="UNC Greensboro" v-if='shouldDisplay("UNC Greensboro")'>
<td>288</td>
<td><img src="https://fantasyvball.github.io/assets/UNC Greensboro.svg"/></td>
<td>UNC Greensboro</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5438</td>
</tr>
<tr id="FDU" v-if='shouldDisplay("FDU")'>
<td>289</td>
<td><img src="https://fantasyvball.github.io/assets/FDU.svg"/></td>
<td>FDU</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5422</td>
</tr>
<tr id="Eastern Wash." v-if='shouldDisplay("Eastern Wash.")'>
<td>290</td>
<td><img src="https://fantasyvball.github.io/assets/Eastern Wash..svg"/></td>
<td>Eastern Wash.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5414</td>
</tr>
<tr id="Niagara" v-if='shouldDisplay("Niagara")'>
<td>291</td>
<td><img src="https://fantasyvball.github.io/assets/Niagara.svg"/></td>
<td>Niagara</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5407</td>
</tr>
<tr id="Alabama St." v-if='shouldDisplay("Alabama St.")'>
<td>292</td>
<td><img src="https://fantasyvball.github.io/assets/Alabama St..svg"/></td>
<td>Alabama St.</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5393</td>
</tr>
<tr id="Penn" v-if='shouldDisplay("Penn")'>
<td>293</td>
<td><img src="https://fantasyvball.github.io/assets/Penn.svg"/></td>
<td>Penn</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.5393</td>
</tr>
<tr id="George Washington" v-if='shouldDisplay("George Washington")'>
<td>294</td>
<td><img src="https://fantasyvball.github.io/assets/George Washington.svg"/></td>
<td>George Washington</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.5381</td>
</tr>
<tr id="Norfolk St." v-if='shouldDisplay("Norfolk St.")'>
<td>295</td>
<td><img src="https://fantasyvball.github.io/assets/Norfolk St..svg"/></td>
<td>Norfolk St.</td>
<td>0</td>
<td>2</td>
<td>0.000000</td>
<td>0.5358</td>
</tr>
<tr id="Radford" v-if='shouldDisplay("Radford")'>
<td>296</td>
<td><img src="https://fantasyvball.github.io/assets/Radford.svg"/></td>
<td>Radford</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5341</td>
</tr>
<tr id="Alabama A&amp;M" v-if='shouldDisplay("Alabama A&amp;M")'>
<td>297</td>
<td><img src="https://fantasyvball.github.io/assets/Alabama A&amp;M.svg"/></td>
<td>Alabama A&amp;M</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5331</td>
</tr>
<tr id="North Dakota" v-if='shouldDisplay("North Dakota")'>
<td>298</td>
<td><img src="https://fantasyvball.github.io/assets/North Dakota.svg"/></td>
<td>North Dakota</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5331</td>
</tr>
<tr id="Northwestern St." v-if='shouldDisplay("Northwestern St.")'>
<td>299</td>
<td><img src="https://fantasyvball.github.io/assets/Northwestern St..svg"/></td>
<td>Northwestern St.</td>
<td>0</td>
<td>7</td>
<td>0.000000</td>
<td>0.5308</td>
</tr>
<tr id="Southern Miss." v-if='shouldDisplay("Southern Miss.")'>
<td>300</td>
<td><img src="https://fantasyvball.github.io/assets/Southern Miss..svg"/></td>
<td>Southern Miss.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5305</td>
</tr>
<tr id="Rice" v-if='shouldDisplay("Rice")'>
<td>301</td>
<td><img src="https://fantasyvball.github.io/assets/Rice.svg"/></td>
<td>Rice</td>
<td>2</td>
<td>2</td>
<td>0.500000</td>
<td>0.5301</td>
</tr>
<tr id="Nicholls" v-if='shouldDisplay("Nicholls")'>
<td>302</td>
<td><img src="https://fantasyvball.github.io/assets/Nicholls.svg"/></td>
<td>Nicholls</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5255</td>
</tr>
<tr id="NJIT" v-if='shouldDisplay("NJIT")'>
<td>303</td>
<td><img src="https://fantasyvball.github.io/assets/NJIT.svg"/></td>
<td>NJIT</td>
<td>3</td>
<td>4</td>
<td>0.428571</td>
<td>0.5231</td>
</tr>
<tr id="Northern Ariz." v-if='shouldDisplay("Northern Ariz.")'>
<td>304</td>
<td><img src="https://fantasyvball.github.io/assets/Northern Ariz..svg"/></td>
<td>Northern Ariz.</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.5188</td>
</tr>
<tr id="Lamar University" v-if='shouldDisplay("Lamar University")'>
<td>305</td>
<td><img src="https://fantasyvball.github.io/assets/Lamar University.svg"/></td>
<td>Lamar University</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.5173</td>
</tr>
<tr id="Winthrop" v-if='shouldDisplay("Winthrop")'>
<td>306</td>
<td><img src="https://fantasyvball.github.io/assets/Winthrop.svg"/></td>
<td>Winthrop</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5167</td>
</tr>
<tr id="Idaho" v-if='shouldDisplay("Idaho")'>
<td>307</td>
<td><img src="https://fantasyvball.github.io/assets/Idaho.svg"/></td>
<td>Idaho</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5164</td>
</tr>
<tr id="Ark.-Pine Bluff" v-if='shouldDisplay("Ark.-Pine Bluff")'>
<td>308</td>
<td><img src="https://fantasyvball.github.io/assets/Ark.-Pine Bluff.svg"/></td>
<td>Ark.-Pine Bluff</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5161</td>
</tr>
<tr id="Stonehill" v-if='shouldDisplay("Stonehill")'>
<td>309</td>
<td><img src="https://fantasyvball.github.io/assets/Stonehill.svg"/></td>
<td>Stonehill</td>
<td>0</td>
<td>7</td>
<td>0.000000</td>
<td>0.5156</td>
</tr>
<tr id="Central Ark." v-if='shouldDisplay("Central Ark.")'>
<td>310</td>
<td><img src="https://fantasyvball.github.io/assets/Central Ark..svg"/></td>
<td>Central Ark.</td>
<td>2</td>
<td>5</td>
<td>0.285714</td>
<td>0.5113</td>
</tr>
<tr id="Elon" v-if='shouldDisplay("Elon")'>
<td>311</td>
<td><img src="https://fantasyvball.github.io/assets/Elon.svg"/></td>
<td>Elon</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.5094</td>
</tr>
<tr id="Bethune-Cookman" v-if='shouldDisplay("Bethune-Cookman")'>
<td>312</td>
<td><img src="https://fantasyvball.github.io/assets/Bethune-Cookman.svg"/></td>
<td>Bethune-Cookman</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5081</td>
</tr>
<tr id="Denver" v-if='shouldDisplay("Denver")'>
<td>313</td>
<td><img src="https://fantasyvball.github.io/assets/Denver.svg"/></td>
<td>Denver</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.5081</td>
</tr>
<tr id="Western Ill." v-if='shouldDisplay("Western Ill.")'>
<td>314</td>
<td><img src="https://fantasyvball.github.io/assets/Western Ill..svg"/></td>
<td>Western Ill.</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.5081</td>
</tr>
<tr id="Fresno St." v-if='shouldDisplay("Fresno St.")'>
<td>315</td>
<td><img src="https://fantasyvball.github.io/assets/Fresno St..svg"/></td>
<td>Fresno St.</td>
<td>2</td>
<td>3</td>
<td>0.400000</td>
<td>0.5009</td>
</tr>
<tr id="Syracuse" v-if='shouldDisplay("Syracuse")'>
<td>316</td>
<td><img src="https://fantasyvball.github.io/assets/Syracuse.svg"/></td>
<td>Syracuse</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.5005</td>
</tr>
<tr id="Eastern Mich." v-if='shouldDisplay("Eastern Mich.")'>
<td>317</td>
<td><img src="https://fantasyvball.github.io/assets/Eastern Mich..svg"/></td>
<td>Eastern Mich.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.4997</td>
</tr>
<tr id="Cal St. Fullerton" v-if='shouldDisplay("Cal St. Fullerton")'>
<td>318</td>
<td><img src="https://fantasyvball.github.io/assets/Cal St. Fullerton.svg"/></td>
<td>Cal St. Fullerton</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4994</td>
</tr>
<tr id="ETSU" v-if='shouldDisplay("ETSU")'>
<td>319</td>
<td><img src="https://fantasyvball.github.io/assets/ETSU.svg"/></td>
<td>ETSU</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4994</td>
</tr>
<tr id="Manhattan" v-if='shouldDisplay("Manhattan")'>
<td>320</td>
<td><img src="https://fantasyvball.github.io/assets/Manhattan.svg"/></td>
<td>Manhattan</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4994</td>
</tr>
<tr id="Texas Southern" v-if='shouldDisplay("Texas Southern")'>
<td>321</td>
<td><img src="https://fantasyvball.github.io/assets/Texas Southern.svg"/></td>
<td>Texas Southern</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4988</td>
</tr>
<tr id="Cornell" v-if='shouldDisplay("Cornell")'>
<td>322</td>
<td><img src="https://fantasyvball.github.io/assets/Cornell.svg"/></td>
<td>Cornell</td>
<td>1</td>
<td>2</td>
<td>0.333333</td>
<td>0.4976</td>
</tr>
<tr id="Lafayette" v-if='shouldDisplay("Lafayette")'>
<td>323</td>
<td><img src="https://fantasyvball.github.io/assets/Lafayette.svg"/></td>
<td>Lafayette</td>
<td>1</td>
<td>2</td>
<td>0.333333</td>
<td>0.4976</td>
</tr>
<tr id="Kent St." v-if='shouldDisplay("Kent St.")'>
<td>324</td>
<td><img src="https://fantasyvball.github.io/assets/Kent St..svg"/></td>
<td>Kent St.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.4962</td>
</tr>
<tr id="South Carolina St." v-if='shouldDisplay("South Carolina St.")'>
<td>325</td>
<td><img src="https://fantasyvball.github.io/assets/South Carolina St..svg"/></td>
<td>South Carolina St.</td>
<td>0</td>
<td>7</td>
<td>0.000000</td>
<td>0.4934</td>
</tr>
<tr id="UC Riverside" v-if='shouldDisplay("UC Riverside")'>
<td>326</td>
<td><img src="https://fantasyvball.github.io/assets/UC Riverside.svg"/></td>
<td>UC Riverside</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4914</td>
</tr>
<tr id="Grambling" v-if='shouldDisplay("Grambling")'>
<td>327</td>
<td><img src="https://fantasyvball.github.io/assets/Grambling.svg"/></td>
<td>Grambling</td>
<td>1</td>
<td>6</td>
<td>0.142857</td>
<td>0.4907</td>
</tr>
<tr id="Rider" v-if='shouldDisplay("Rider")'>
<td>328</td>
<td><img src="https://fantasyvball.github.io/assets/Rider.svg"/></td>
<td>Rider</td>
<td>1</td>
<td>4</td>
<td>0.200000</td>
<td>0.4881</td>
</tr>
<tr id="New Orleans" v-if='shouldDisplay("New Orleans")'>
<td>329</td>
<td><img src="https://fantasyvball.github.io/assets/New Orleans.svg"/></td>
<td>New Orleans</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.4872</td>
</tr>
<tr id="Providence" v-if='shouldDisplay("Providence")'>
<td>330</td>
<td><img src="https://fantasyvball.github.io/assets/Providence.svg"/></td>
<td>Providence</td>
<td>2</td>
<td>4</td>
<td>0.333333</td>
<td>0.4866</td>
</tr>
<tr id="Siena" v-if='shouldDisplay("Siena")'>
<td>331</td>
<td><img src="https://fantasyvball.github.io/assets/Siena.svg"/></td>
<td>Siena</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4839</td>
</tr>
<tr id="Tennessee St." v-if='shouldDisplay("Tennessee St.")'>
<td>332</td>
<td><img src="https://fantasyvball.github.io/assets/Tennessee St..svg"/></td>
<td>Tennessee St.</td>
<td>0</td>
<td>4</td>
<td>0.000000</td>
<td>0.4803</td>
</tr>
<tr id="Central Conn. St." v-if='shouldDisplay("Central Conn. St.")'>
<td>333</td>
<td><img src="https://fantasyvball.github.io/assets/Central Conn. St..svg"/></td>
<td>Central Conn. St.</td>
<td>0</td>
<td>7</td>
<td>0.000000</td>
<td>0.4724</td>
</tr>
<tr id="South Dakota St." v-if='shouldDisplay("South Dakota St.")'>
<td>334</td>
<td><img src="https://fantasyvball.github.io/assets/South Dakota St..svg"/></td>
<td>South Dakota St.</td>
<td>1</td>
<td>5</td>
<td>0.166667</td>
<td>0.4721</td>
</tr>
<tr id="Illinois St." v-if='shouldDisplay("Illinois St.")'>
<td>335</td>
<td><img src="https://fantasyvball.github.io/assets/Illinois St..svg"/></td>
<td>Illinois St.</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4696</td>
</tr>
<tr id="Saint Peter's" v-if="shouldDisplay(&quot;Saint Peter's&quot;)">
<td>336</td>
<td><img src="https://fantasyvball.github.io/assets/Saint Peter's.svg"/></td>
<td>Saint Peter's</td>
<td>0</td>
<td>6</td>
<td>0.000000</td>
<td>0.4677</td>
</tr>
<tr id="Le Moyne" v-if='shouldDisplay("Le Moyne")'>
<td>337</td>
<td><img src="https://fantasyvball.github.io/assets/Le Moyne.svg"/></td>
<td>Le Moyne</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.4537</td>
</tr>
<tr id="Little Rock" v-if='shouldDisplay("Little Rock")'>
<td>338</td>
<td><img src="https://fantasyvball.github.io/assets/Little Rock.svg"/></td>
<td>Little Rock</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.4456</td>
</tr>
<tr id="N.C. Central" v-if='shouldDisplay("N.C. Central")'>
<td>339</td>
<td><img src="https://fantasyvball.github.io/assets/N.C. Central.svg"/></td>
<td>N.C. Central</td>
<td>1</td>
<td>3</td>
<td>0.250000</td>
<td>0.4456</td>
</tr>
<tr id="Sacred Heart" v-if='shouldDisplay("Sacred Heart")'>
<td>340</td>
<td><img src="https://fantasyvball.github.io/assets/Sacred Heart.svg"/></td>
<td>Sacred Heart</td>
<td>0</td>
<td>4</td>
<td>0.000000</td>
<td>0.4345</td>
</tr>
<tr id="Alcorn" v-if='shouldDisplay("Alcorn")'>
<td>341</td>
<td><img src="https://fantasyvball.github.io/assets/Alcorn.svg"/></td>
<td>Alcorn</td>
<td>0</td>
<td>3</td>
<td>0.000000</td>
<td>0.4009</td>
</tr>
<tr id="Idaho St." v-if='shouldDisplay("Idaho St.")'>
<td>342</td>
<td><img src="https://fantasyvball.github.io/assets/Idaho St..svg"/></td>
<td>Idaho St.</td>
<td>0</td>
<td>5</td>
<td>0.000000</td>
<td>0.3970</td>
</tr>
<tr id="LeMoyne-Owen" v-if='shouldDisplay("LeMoyne-Owen")'>
<td>343</td>
<td><img src="https://fantasyvball.github.io/assets/LeMoyne-Owen.svg"/></td>
<td>LeMoyne-Owen</td>
<td>0</td>
<td>1</td>
<td>0.000000</td>
<td>0.2581</td>
</tr>
<tr id="Southern U." v-if='shouldDisplay("Southern U.")'>
<td>344</td>
<td><img src="https://fantasyvball.github.io/assets/Southern U..svg"/></td>
<td>Southern U.</td>
<td>0</td>
<td>0</td>
<td>0.000000</td>
<td>0.0000</td>
</tr>
</tbody>
</table>
    `,
  data() {
    return {
      allConf: ['AAC', 'ACC', 'ASUN', 'America East', 'Atlantic 10', 'Big 12', 'Big East', 'Big Sky', 'Big South', 'Big Ten', 'Big West', 'C-USA', 'CAA', 'DI Independent', 'Horizon', 'Ivy League', 'MAAC', 'MAC', 'MEAC', 'MVC', 'Mountain West', 'NEC', 'OVC', 'Pac-12', 'Patriot', 'SEC', 'SWAC', 'SoCon', 'Southland', 'Summit League', 'Sun Belt', 'WAC', 'WCC'],
      conf:"ALL CONFERENCE",
      
    };
  },
  methods: {
    shouldDisplay(id) {
      if(this.conf == "ALL CONFERENCE"){
          return true
      }
      console.log(id)
      console.log(window.conf_member[this.conf]);
      return window.conf_member[this.conf].includes(id)
    },
  }
}
