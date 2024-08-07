const rawData = `E14001136	Broadland_and_Fakenham
E14001256	Great_Yarmouth
E14001396	North_Norfolk
E14001365	Mid_Norfolk
E14001497	South_West_Norfolk
E14001405	North_West_Norfolk
E14001390	North_East_Cambridgeshire
E14001224	Ely_and_East_Cambridgeshire
E14001481	South_Cambridgeshire
E14001149	Cambridge
E14001512	St_Neots_and_Mid_Cambridgeshire
E14001298	Huntingdon
E14001401	North_West_Cambridgeshire
E14001425	Peterborough
E14001384	North_Bedfordshire
E14001084	Bedford
E14001359	Mid_Bedfordshire
E14001206	Dunstable_and_Leighton_Buzzard
E14001346	Luton_South_and_South_Bedfordshire
E14001174	Clacton
E14001273	Harwich_and_North_Essex
E14001176	Colchester
E14001590	Witham
E14001351	Maldon
E14001437	Rayleigh_and_Wickford
E14001154	Castle_Point
E14001480	South_Basildon_and_East_Thurrock
E14001546	Thurrock
E14001077	Basildon_and_Billericay
E14001125	Brentwood_and_Ongar
E14001226	Epping_Forest
E14001267	Harlow
E14001159	Chelmsford
E14001402	North_West_Essex
E14001121	Braintree
E14001494	South_Suffolk
E14001302	Ipswich
E14001578	West_Suffolk
E14001146	Bury_St_Edmunds_and_Stowmarket
E14001156	Central_Suffolk_and_North_Ipswich
E14001530	Suffolk_Coastal
E14001569	Waveney_Valley
E14001344	Lowestoft
E14001489	South_Norfolk
E14001409	Norwich_South
E14001408	Norwich_North
E14001345	Luton_North
E14001289	Hitchin
E14001393	North_East_Hertfordshire
E14001516	Stevenage
E14001283	Hertford_and_Stortford
E14001573	Welwyn_Hatfield
E14001139	Broxbourne
E14001284	Hertsmere
E14001496	South_West_Hertfordshire
E14001568	Watford
E14001278	Hemel_Hempstead
E14001268	Harpenden_and_Berkhamsted
E14001507	St_Albans
E14001501	Southend_East_and_Rochford
E14001502	Southend_West_and_Leigh
E14001287	High_Peak
E14001195	Derbyshire_Dales
E14001483	South_Derbyshire
E14001194	Derby_South
E14001193	Derby_North
E14001228	Erewash
E14001362	Mid_Derbyshire
E14001066	Amber_Valley
E14001391	North_East_Derbyshire
E14001165	Chesterfield
E14001109	Bolsover
E14001458	Rutland_and_Stamford
E14001253	Grantham_and_Bourne
E14001476	Sleaford_and_North_Hykeham
E14001336	Lincoln
E14001243	Gainsborough
E14001343	Louth_and_Horncastle
E14001114	Boston_and_Skegness
E14001487	South_Holland_and_The_Deepings
E14001457	Rushcliffe
E14001412	Nottingham_South
E14001410	Nottingham_East
E14001411	Nottingham_North_and_Kimberley
E14001140	Broxtowe
E14001068	Ashfield
E14001355	Mansfield
E14001245	Gedling
E14001471	Sherwood_Forest
E14001375	Newark
E14001079	Bassetlaw
E14001407	Northampton_South
E14001490	South_Northamptonshire
E14001192	Daventry
E14001406	Northampton_North
E14001571	Wellingborough_and_Rushden
E14001179	Corby_and_East_Northamptonshire
E14001311	Kettering
E14001266	Harborough,_Oadby_and_Wigston
E14001364	Mid_Leicestershire
E14001488	South_Leicestershire
E14001328	Leicester_West
E14001327	Leicester_South
E14001326	Leicester_East
E14001288	Hinckley_and_Bosworth
E14001404	North_West_Leicestershire
E14001342	Loughborough
E14001357	Melton_and_Syston
E14001221	Edmonton_and_Winchmore_Hill
E14001225	Enfield_North
E14001290	Holborn_and_St_Pancras
E14001276	Hayes_and_Harlington
E14001208	Ealing_North
E14001209	Ealing_Southall
E14001207	Ealing_Central_and_Acton
E14001188	Croydon_West
E14001527	Streatham_and_Croydon_North
E14001186	Croydon_East
E14001175	Clapham_and_Brixton_Hill
E14001205	Dulwich_and_West_Norwood
E14001333	Lewisham_West_and_East_Dulwich
E14001559	Vauxhall_and_Camberwell_Green
E14001085	Bermondsey_and_Old_Southwark
E14001332	Lewisham_North
E14001421	Peckham
E14001331	Lewisham_East
E14001257	Greenwich_and_Woolwich
E14001223	Eltham_and_Chislehurst
E14001229	Erith_and_Thamesmead
E14001089	Bexleyheath_and_Crayford
E14001167	Chingford_and_Woodford_Green
E14001563	Walthamstow
E14001334	Leyton_and_Wanstead
E14001300	Ilford_North
E14001301	Ilford_South
E14001073	Barking
E14001576	West_Ham_and_Beckton
E14001213	East_Ham
E14001525	Stratford_and_Bow
E14001430	Poplar_and_Limehouse
E14001086	Bethnal_Green_and_Stepney
E14001271	Harrow_West
E14001236	Feltham_and_Heston
E14001556	Twickenham
E14001264	Hammersmith_and_Chiswick
E14001124	Brentford_and_Isleworth
E14001310	Kensington_and_Bayswater
E14001414	Old_Bexley_and_Sidcup
E14001083	Beckenham_and_Penge
E14001435	Queen's_Park_and_Maida_Vale
E14001122	Brent_East
E14001123	Brent_West
E14001503	Southgate_and_Wood_Green
E14001238	Finchley_and_Golders_Green
E14001279	Hendon
E14001169	Chipping_Barnet
E14001293	Hornsey_and_Friern_Barnet
E14001553	Tottenham
E14001259	Hackney_North_and_Stoke_Newington
E14001434	Putney
E14001081	Battersea
E14001550	Tooting
E14001153	Carshalton_and_Wallington
E14001534	Sutton_and_Cheam
E14001187	Croydon_South
E14001305	Islington_North
E14001306	Islington_South_and_Finsbury
E14001260	Hackney_South_and_Shoreditch
E14001270	Harrow_East
E14001160	Chelsea_and_Fulham
E14001417	Orpington
E14001137	Bromley_and_Biggin_Hill
E14001189	Dagenham_and_Rainham
E14001292	Hornchurch_and_Upminster
E14001448	Romford
E14001371	Mitcham_and_Morden
E14001312	Kingston_and_Surbiton
E14001586	Wimbledon
E14001445	Richmond_Park
E14001558	Uxbridge_and_South_Ruislip
E14001454	Ruislip,_Northwood_and_Pinner
E14001183	Cramlington_and_Killingworth
E14001106	Blaydon_and_Consett
E14001285	Hexham
E14001107	Blyth_and_Ashington
E14001244	Gateshead_Central_and_Whickham
E14001557	Tynemouth
E14001379	Newcastle_upon_Tyne_North
E14001377	Newcastle_upon_Tyne_Central_and_West
E14001378	Newcastle_upon_Tyne_East_and_Wallsend
E14001531	Sunderland_Central
E14001492	South_Shields
E14001307	Jarrow_and_Gateshead_East
E14001173	City_of_Durham
E14001211	Easington
E14001272	Hartlepool
E14001389	North_Durham
E14001567	Washington_and_Gateshead_South
E14001295	Houghton_and_Sunderland_South
E14001101	Bishop_Auckland
E14001382	Newton_Aycliffe_and_Spennymoor
E14001518	Stockton_North
E14001367	Middlesbrough_and_Thornaby_East
E14001368	Middlesbrough_South_and_East_Cleveland
E14001440	Redcar
E14001190	Darlington
E14001519	Stockton_West
E14001397	North_Northumberland
E14001329	Leigh_and_Atherton
E14001350	Makerfield
E14001152	Carlisle
E14001372	Morecambe_and_Lunesdale
E14001318	Lancaster_and_Wyre
E14001443	Ribble_Valley
E14001105	Blackpool_South
E14001242	Fylde
E14001433	Preston
E14001142	Burnley
E14001422	Pendle_and_Clitheroe
E14001104	Blackpool_North_and_Fleetwood
E14001102	Blackburn
E14001299	Hyndburn
E14001450	Rossendale_and_Darwen
E14001504	Southport
E14001491	South_Ribble
E14001577	West_Lancashire
E14001463	Sefton_Central
E14001113	Bootle
E14001446	Rochdale
E14001170	Chorley
E14001144	Bury_North
E14001286	Heywood_and_Middleton_North
E14001145	Bury_South
E14001112	Bolton_West
E14001110	Bolton_North_East
E14001111	Bolton_South_and_Walkden
E14001338	Liverpool_Riverside
E14001340	Liverpool_Wavertree
E14001337	Liverpool_Garston
E14001317	Knowsley
E14001415	Oldham_East_and_Saddleworth
E14001416	Oldham_West,_Chadderton_and_Royton
E14001339	Liverpool_Walton
E14001585	Wigan
E14001584	Widnes_and_Halewood
E14001509	St_Helens_North
E14001103	Blackley_and_Middleton_South
E14001515	Stalybridge_and_Hyde
E14001070	Ashton-under-Lyne
E14001341	Liverpool_West_Derby
E14001459	Salford
E14001598	Worsley_and_Eccles
E14001510	St_Helens_South_and_Whiston
E14001528	Stretford_and_Urmston
E14001565	Warrington_South
E14001564	Warrington_North
E14001065	Altrincham_and_Sale_West
E14001602	Wythenshawe_and_Sale_East
E14001352	Manchester_Central
E14001539	Tatton
E14001251	Gorton_and_Denton
E14001589	Wirral_West
E14001361	Mid_Cheshire
E14001353	Manchester_Rusholme
E14001354	Manchester_Withington
E14001164	Chester_South_and_Eddisbury
E14001185	Crewe_and_Nantwich
E14001517	Stockport
E14001561	Wallasey
E14001178	Congleton
E14001347	Macclesfield
E14001163	Chester_North_and_Neston
E14001158	Cheadle
E14001222	Ellesmere_Port_and_Bromborough
E14001091	Birkenhead
E14001455	Runcorn_and_Helsby
E14001580	Westmorland_and_Lonsdale
E14001076	Barrow_and_Furness
E14001277	Hazel_Grove
E14001424	Penrith_and_Solway
E14001583	Whitehaven_and_Workington
E14001108	Bognor_Regis_and_Littlehampton
E14001067	Arundel_and_South_Downs
E14001071	Aylesbury
E14001370	Milton_Keynes_North
E14001369	Milton_Keynes_Central
E14001141	Buckingham_and_Bletchley
E14001360	Mid_Buckinghamshire
E14001600	Wycombe
E14001072	Banbury
E14001090	Bicester_and_Woodstock
E14001280	Henley_and_Thame
E14001197	Didcot_and_Wantage
E14001591	Witney
E14001420	Oxford_West_and_Abingdon
E14001419	Oxford_East
E14001376	Newbury
E14001439	Reading_West_and_Mid_Berkshire
E14001438	Reading_Central
E14001210	Earley_and_Woodley
E14001593	Wokingham
E14001117	Bracknell
E14001348	Maidenhead
E14001477	Slough
E14001588	Windsor
E14001505	Spelthorne
E14001456	Runnymede_and_Weybridge
E14001230	Esher_and_Walton
E14001227	Epsom_and_Ewell
E14001442	Reigate
E14001215	East_Surrey
E14001201	Dorking_and_Horley
E14001258	Guildford
E14001249	Godalming_and_Ash
E14001592	Woking
E14001532	Surrey_Heath
E14001234	Farnham_and_Bordon
E14001214	East_Hampshire
E14001392	North_East_Hampshire
E14001078	Basingstoke
E14001403	North_West_Hampshire
E14001449	Romsey_and_Southampton_North
E14001500	Southampton_Test
E14001499	Southampton_Itchen
E14001373	New_Forest_East
E14001374	New_Forest_West
E14001220	Eastleigh
E14001263	Hamble_Valley
E14001587	Winchester
E14001233	Fareham_and_Waterlooville
E14001252	Gosport
E14001431	Portsmouth_North
E14001432	Portsmouth_South
E14001275	Havant
E14001166	Chichester
E14001599	Worthing_West
E14001218	East_Worthing_and_Shoreham
E14001063	Aldershot
E14001296	Hove_and_Portslade
E14001366	Mid_Sussex
E14001294	Horsham
E14001184	Crawley
E14001219	Eastbourne
E14001088	Bexhill_and_Battle
E14001274	Hastings_and_Rye
E14001555	Tunbridge_Wells
E14001254	Gravesham
E14001447	Rochester_and_Strood
E14001157	Chatham_and_Aylesford
E14001246	Gillingham_and_Rainham
E14001474	Sittingbourne_and_Sheppey
E14001069	Ashford
E14001239	Folkestone_and_Hythe
E14001202	Dover_and_Deal
E14001151	Canterbury
E14001282	Herne_Bay_and_Sandwich
E14001216	East_Thanet
E14001304	Isle_of_Wight_West
E14001303	Isle_of_Wight_East
E14001082	Beaconsfield
E14001130	Brighton_Pavilion
E14001129	Brighton_Kemptown_and_Peacehaven
E14001162	Chesham_and_Amersham
E14001191	Dartford
E14001212	East_Grinstead_and_Uckfield
E14001235	Faversham_and_Mid_Kent
E14001330	Lewes
E14001349	Maidstone_and_Malling
E14001465	Sevenoaks
E14001533	Sussex_Weald
E14001549	Tonbridge
E14001570	Weald_of_Kent
E14001241	Frome_and_East_Somerset
E14001247	Glastonbury_and_Somerton
E14001363	Mid_Dorset_and_North_Poole
E14001485	South_Dorset
E14001388	North_Dorset
E14001575	West_Dorset
E14001131	Bristol_Central
E14001135	Bristol_South
E14001132	Bristol_East
E14001134	Bristol_North_West
E14001133	Bristol_North_East
E14001237	Filton_and_Bradley_Stoke
E14001545	Thornbury_and_Yate
E14001394	North_East_Somerset_and_Hanham
E14001080	Bath
E14001581	Weston-super-Mare
E14001572	Wells_and_Mendip_Hills
E14001399	North_Somerset
E14001126	Bridgwater
E14001429	Poole
E14001116	Bournemouth_West
E14001115	Bournemouth_East
E14001171	Christchurch
E14001542	Tewkesbury
E14001386	North_Cotswolds
E14001161	Cheltenham
E14001248	Gloucester
E14001240	Forest_of_Dean
E14001529	Stroud
E14001482	South_Cotswolds
E14001536	Swindon_North
E14001537	Swindon_South
E14001168	Chippenham
E14001356	Melksham_and_Devizes
E14001217	East_Wiltshire
E14001460	Salisbury
E14001498	South_West_Wiltshire
E14001603	Yeovil
E14001540	Taunton_and_Wellington
E14001548	Tiverton_and_Minehead
E14001291	Honiton_and_Sidmouth
E14001232	Exmouth_and_Exeter_East
E14001231	Exeter
E14001381	Newton_Abbot
E14001551	Torbay
E14001484	South_Devon
E14001426	Plymouth_Moor_View
E14001427	Plymouth_Sutton_and_Devonport
E14001387	North_Devon
E14001552	Torridge_and_Tavistock
E14001495	South_West_Devon
E14001155	Central_Devon
E14001385	North_Cornwall
E14001486	South_East_Cornwall
E14001508	St_Austell_and_Newquay
E14001554	Truro_and_Falmouth
E14001511	St_Ives
E14001148	Camborne_and_Redruth
E14001098	Birmingham_Perry_Barr
E14001093	Birmingham_Erdington
E14001309	Kenilworth_and_Southam
E14001566	Warwick_and_Leamington
E14001203	Droitwich_and_Evesham
E14001453	Rugby
E14001413	Nuneaton
E14001400	North_Warwickshire_and_Bedworth
E14001535	Sutton_Coldfield
E14001095	Birmingham_Hodge_Hill_and_Solihull_North
E14001096	Birmingham_Ladywood
E14001092	Birmingham_Edgbaston
E14001097	Birmingham_Northfield
E14001099	Birmingham_Selly_Oak
E14001094	Birmingham_Hall_Green_and_Moseley
E14001100	Birmingham_Yardley
E14001479	Solihull_West_and_Shirley
E14001281	Hereford_and_South_Herefordshire
E14001579	West_Worcestershire
E14001597	Worcester
E14001601	Wyre_Forest
E14001441	Redditch
E14001180	Coventry_East
E14001181	Coventry_North_West
E14001493	South_Shropshire
E14001473	Shrewsbury
E14001541	Telford
E14001543	The_Wrekin
E14001398	North_Shropshire
E14001596	Wolverhampton_West
E14001064	Aldridge-Brownhills
E14001562	Walsall_and_Bloxwich
E14001204	Dudley
E14001261	Halesowen
E14001524	Stourbridge
E14001478	Smethwick
E14001316	Kingswinford_and_South_Staffordshire
E14001538	Tamworth
E14001335	Lichfield
E14001143	Burton_and_Uttoxeter
E14001380	Newcastle-under-Lyme
E14001514	Staffordshire_Moorlands
E14001521	Stoke-on-Trent_North
E14001520	Stoke-on-Trent_Central
E14001522	Stoke-on-Trent_South
E14001150	Cannock_Chase
E14001523	Stone,_Great_Wyrley_and_Penkridge
E14001513	Stafford
E14001594	Wolverhampton_North_East
E14001595	Wolverhampton_South_East
E14001547	Tipton_and_Wednesbury
E14001526	Stratford-on-Avon
E14001395	North_Herefordshire
E14001358	Meriden_and_Solihull_East
E14001182	Coventry_South
E14001138	Bromsgrove
E14001574	West_Bromwich
E14001250	Goole_and_Pocklington
E14001127	Bridlington_and_The_Wolds
E14001468	Sheffield_Hallam
E14001467	Sheffield_Central
E14001466	Sheffield_Brightside_and_Hillsborough
E14001469	Sheffield_Heeley
E14001470	Sheffield_South_East
E14001423	Penistone_and_Stocksbridge
E14001074	Barnsley_North
E14001075	Barnsley_South
E14001436	Rawmarsh_and_Conisbrough
E14001452	Rotherham
E14001451	Rother_Valley
E14001198	Doncaster_Central
E14001200	Doncaster_North
E14001199	Doncaster_East_and_the_Isle_of_Axholme
E14001462	Scunthorpe
E14001128	Brigg_and_Immingham
E14001255	Great_Grimsby_and_Cleethorpes
E14001315	Kingston_upon_Hull_West_and_Haltemprice
E14001314	Kingston_upon_Hull_North_and_Cottingham
E14001313	Kingston_upon_Hull_East
E14001087	Beverley_and_Holderness
E14001464	Selby
E14001582	Wetherby_and_Easingwold
E14001269	Harrogate_and_Knaresborough
E14001475	Skipton_and_Ripon
E14001444	Richmond_and_Northallerton
E14001544	Thirsk_and_Malton
E14001461	Scarborough_and_Whitby
E14001605	York_Outer
E14001604	York_Central
E14001428	Pontefract,_Castleford_and_Knottingley
E14001196	Dewsbury_and_Batley
E14001383	Normanton_and_Hemsworth
E14001262	Halifax
E14001560	Wakefield_and_Rothwell
E14001418	Ossett_and_Denby_Dale
E14001177	Colne_Valley
E14001297	Huddersfield
E14001506	Spen_Valley
E14001147	Calder_Valley
E14001308	Keighley_and_Ilkley
E14001118	Bradford_East
E14001472	Shipley
E14001319	Leeds_Central_and_Headingley
E14001120	Bradford_West
E14001119	Bradford_South
E14001324	Leeds_South_West_and_Morley
E14001325	Leeds_West_and_Pudsey
E14001321	Leeds_North_East
E14001320	Leeds_East
E14001322	Leeds_North_West
E14001323	Leeds_South
E14001172	Cities_of_London_and_Westminster
E14001265	Hampstead_and_Highgate
W07000081	Aberafan_Maesteg
W07000082	Alyn_and_Deeside
W07000083	Bangor_Aberconwy
W07000084	Blaenau_Gwent_and_Rhymney
W07000085	Brecon,_Radnor_and_Cwm_Tawe
W07000086	Bridgend
W07000087	Caerfyrddin
W07000088	Caerphilly
W07000089	Cardiff_East
W07000090	Cardiff_North
W07000091	Cardiff_South_and_Penarth
W07000092	Cardiff_West
W07000093	Ceredigion_Preseli
W07000094	Clwyd_East
W07000095	Clwyd_North
W07000096	Dwyfor_Meirionnydd
W07000097	Gower
W07000098	Llanelli
W07000099	Merthyr_Tydfil_and_Aberdare
W07000100	Mid_and_South_Pembrokeshire
W07000101	Monmouthshire
W07000102	Montgomeryshire_and_Glyndwr
W07000103	Neath_and_Swansea_East
W07000104	Newport_East
W07000105	Newport_West_and_Islwyn
W07000106	Pontypridd
W07000107	Rhondda_and_Ogmore
W07000108	Swansea_West
W07000109	Torfaen
W07000110	Vale_of_Glamorgan
W07000111	Wrexham
W07000112	Ynys_Môn`;

const constituencies = rawData
  .split(/\n/)
  .map((constituency) => constituency.split(/\t/));

console.log(constituencies);
export default constituencies;
