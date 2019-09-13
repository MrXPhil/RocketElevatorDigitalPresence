						function fonctionChoice_dropMenu() {
						var x = document.getElementById("dropMenu");
							var i = x.selectedIndex;						  
							return i;
							
						}
					 								
						function Call()  {
						type_Selected();	
					
				  
						}
			
						function type_Selected()  {							
						   var service =  fonctionChoice_dropMenu(); 					   
						   
						   if ( service == 1 )   {
							returnQuantity_residential(); 
						   }
						   
						   if ( service == 2 )   {
							returnQuantity_commercial();						
						   }
						   
						   if ( service == 3 )   {
							  Resultqty_Elevators_quote(); 
						   }
						   
						   if ( service == 4 )   {
							  Resultqty_Elevators_quote(); 
						   }					   
						}
			
							//var install_Rate;							   
							//var Total;
				
							function returnQuantity_residential() {
								//Appart qty ....
							   		var Rx = document.getElementById("qty_Appart").value || 0 ;
								//Level qty ....
									var Ry = document.getElementById("qty_Level").value || 0 ;
								//Basement qty .... 
									var Rz = document.getElementById("qty_Base").value || 0;
								
							
							//RESIDENTIAL CALCUL							
								
								//Occurence of 6 Appart by Level rounded to highest integer
									var Rqty = Math.ceil( Rx /(Ry*6) );
								//Occurence of 20 level rounded to highest integer 									   
									var Rw =  Math.ceil(Ry /20);
								//Compute and return qty of elevators needed
									var  RqtyElevators = Rqty*Rw;
								//Minimum value by input	
									if (Rx != 0  && Ry != 1  && Rz  != "" )
								//Value selector for elevators qty 
								{document.getElementById("returned_qty_Eleva").value= RqtyElevators;}
									else {
									document.getElementById("returned_qty_Eleva").value = 0;
									}
									return RqtyElevators;
									}
	
							function returnQuantity_commercial() {
								//Level qty ....
									var Cy = document.getElementById("qty_Level").value || 0 ;
								//Basement qty .... 
									var Cz = document.getElementById("qty_Base").value || 0;
								//Business qty .... 
									var Cb = document.getElementById("qty_Business").value || 0;
								//Parking qty .... 
									var Cp = document.getElementById("qty_Parking").value || 0;
								//Eleva qty .... 
									var Ce = document.getElementById("qty_Eleva").value || 0;
															
							
							//COMMERCIAL CALCUL																	
																
								//Compute and return qty of elevators needed
								var  RqtyElevators = Ce;
								//MINIMU VALUE BY INPUT
									if (Cy != "" && Cz != ""   && Cb  != "" && Cp !="" &&  Ce !=0  )
								//Value selector for elevators qty 		
								{document.getElementById("returned_qty_ElevaB").value = RqtyElevators;}
									else {
										document.getElementById("returned_qty_ElevaB").value = 0;
										}
										return RqtyElevators;
										}										
											

							function Resultqty_Elevators_quote() {
							   service = fonctionChoice_dropMenu();
						
								//var Hy =  document.getElementById("qty_Level").value  || 0 ;
								var Hy = Number(document.getElementById("qty_Level").value || 0  );
								//var Hz =   document.getElementById("qty_Base").value;
								var Hz = Number(document.getElementById("qty_Base").value || 0 );
								var Hpop = document.getElementById("qty_Pop").value || 0 ;
								var Hv = document.getElementById("qty_loan").value || 0 ;
								var Hp = document.getElementById("qty_Parking").value || 0 ;
								var Hh = document.getElementById("qty_Hours").value || 0 ;
								var Min = Hy+Hz							   
							   
								var totalHpop = Math.ceil(Hpop*(Hy+Hz)); 	
							   	var RqtyElevators = Math.ceil(totalHpop/1000 ); 								
																	
								var well =  Math.ceil((Hy+Hz)/20);
							 
								var qty_Eleva_by_well =  (RqtyElevators/well);
							   
								var RqtyElevators =  (qty_Eleva_by_well*well);        
								//console.log(service);							
								if (Hy != "" && Hz != "" && Hp !="" &&  Hpop !="" && Hv != "" && Min != 0 )

								//Value selector for elevators qty 		
								{document.getElementById("hybrid").value = RqtyElevators;}
									else {
										document.getElementById("hybrid").value = 0;
										}
										return RqtyElevators;
										}			
								
								
				
							
			
						function Price()  
					{
						var service = fonctionChoice_dropMenu();						 
								 
						if (service == 1)  {
							 var qty_Elevators_quote = returnQuantity_residential();
						}
						 if (service == 2)  {
							 var qty_Elevators_quote = returnQuantity_commercial();
						}								
						 if (service == 3 || service == 4 )  {
							 var qty_Elevators_quote = Resultqty_Elevators_quote();
						}																
																	
						var install_Rate;							   
						var Total;
							 
						if  (document.getElementById("PriceUnitStandard").checked)	{						 
					    document.getElementById("PriceUnit").value="7565.00";
						install_Rate = (7565.00*(10/100)*qty_Elevators_quote).toFixed(2);
						Total = (7565.00*1.10*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("PriceUnitX").value=(7565.00*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("InstallationCost").value = install_Rate ;
						document.getElementById("Total").value = Total;
						} 	

						if  (document.getElementById("PriceUnitPremium").checked)	{						 
					    document.getElementById("PriceUnit").value="12345.00";
						install_Rate = (12345.00*(13/100)*qty_Elevators_quote).toFixed(2);
						//install_Rate =  install_Rate.toFixed(2);//ok
						Total = (12345.00*1.13*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("PriceUnitX").value=(12345.00*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("InstallationCost").value = install_Rate ;
						document.getElementById("Total").value = Total;
						} 	

						if  (document.getElementById("PriceUnitExcelium").checked)	{						 
					    document.getElementById("PriceUnit").value="15400.00";
						install_Rate = (15400.00*(16/100)*qty_Elevators_quote).toFixed(2);
						//install_Rate =  install_Rate.toFixed(2);//ok
						Total = (15400.00*1.16*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("PriceUnitX").value=(15400.00*qty_Elevators_quote).toFixed(2);//ok
						document.getElementById("InstallationCost").value = install_Rate ;
						document.getElementById("Total").value = Total;
						}								
					}

					
					

						function AddElementDiv1() {
						document.getElementById("DIV_1").style.display = "block";}
						function AddElementDiv2() {
						document.getElementById("DIV_2").style.display = "block";}
						function AddElementDiv3() {
						document.getElementById("DIV_3").style.display = "block";}
						function AddElementDiv4() {
						document.getElementById("DIV_4").style.display = "block";}
						function AddElementDiv5() {
						document.getElementById("DIV_5").style.display = "block";}
						function AddElementDiv6() {
						document.getElementById("DIV_6").style.display = "block";}
						function AddElementDiv7() {
						document.getElementById("DIV_7").style.display = "block";}
						function AddElementDiv8() {
						document.getElementById("DIV_8").style.display = "block";}
						function AddElementDiv9() {
						document.getElementById("DIV_9").style.display = "block";}						
						function AddElementDiv10() {
						document.getElementById("DIV_10").style.display = "block";}
						function AddElementDiv11() {
						document.getElementById("DIV_11").style.display = "block";}
						function AddElementDiv12() {
						document.getElementById("DIV_12").style.display = "block";}

						function RemoveElementDiv1() {
						document.getElementById("DIV_1").style.display = "none";}						
						function RemoveElementDiv2() {
						document.getElementById("DIV_2").style.display = "none";}						
						function RemoveElementDiv3() {
						document.getElementById("DIV_3").style.display = "none";}						
						function RemoveElementDiv4() {
						document.getElementById("DIV_4").style.display = "none";}						
						function RemoveElementDiv5() {
						document.getElementById("DIV_5").style.display = "none";}						
						function RemoveElementDiv6() {
						document.getElementById("DIV_6").style.display = "none";}						
						function RemoveElementDiv7() {
						document.getElementById("DIV_7").style.display = "none";}						
						function RemoveElementDiv8() {
						document.getElementById("DIV_8").style.display = "none";}						
						function RemoveElementDiv9() {
						document.getElementById("DIV_9").style.display = "none";}						
						function RemoveElementDiv10() {
						document.getElementById("DIV_10").style.display = "none";}
						function RemoveElementDiv11() {
						document.getElementById("DIV_11").style.display = "none";}
						function RemoveElementDiv12() {
						document.getElementById("DIV_12").style.display = "none";}


					
/*

					$('#dropMenu').change(function () {
						if ($(this).val() == "0") {
							$(".p_").hide();
							console.log("default set");
						}
					});
						
						*/






						

					//DEFAULT 
					
						function divStatus()	 {	
							$('#projectType').change(function () {
								if ($(this).val() == "0") {
									$(".p_").hide();
									console.log("default set");
								}
							});

							/*	document.getElementById("PriceUnit").value = "";
								document.getElementById("PriceUnitX").value = "";
								document.getElementById("InstallationCost").value = "";
								document.getElementById("Total").value = "";					
								RemoveElementDiv1();
								 RemoveElementDiv2();
								 RemoveElementDiv3();
								 RemoveElementDiv4();
								 RemoveElementDiv5();
								 RemoveElementDiv6();
								 RemoveElementDiv7();
								 RemoveElementDiv8();
								 RemoveElementDiv9(); 
								 RemoveElementDiv10();
								 RemoveElementDiv11();
								 RemoveElementDiv12();
								 }  */
					//RESIDENTIAL		
							if	(fonctionChoice_dropMenu() === 1)	{								
								$('#projectType').change(function () {
									if ($(this).val() == "1") {
										$(".p_").hide();
										$("#DIV_1").show();
										console.log("residential set");
									}
								});

							}

								

/*
								AddElementDiv1();
								AddElementDiv2();
								AddElementDiv3();
								AddElementDiv10()
								RemoveElementDiv4();
								RemoveElementDiv5();
								RemoveElementDiv6();
								RemoveElementDiv7();
								RemoveElementDiv8();
								RemoveElementDiv9();
								RemoveElementDiv11();
								RemoveElementDiv12();   
								} */
					//COMMERCIAL											
							if	(fonctionChoice_dropMenu() === 2)	{								
								AddElementDiv2();
								AddElementDiv3();
								AddElementDiv4();
								AddElementDiv5();
								AddElementDiv6();
								AddElementDiv11();
								RemoveElementDiv1();
								RemoveElementDiv7();
								RemoveElementDiv8();
								RemoveElementDiv9();
								RemoveElementDiv10();
								RemoveElementDiv12();
								}  
					//CORPORATE									
							if	(fonctionChoice_dropMenu() === 3)	{												
								AddElementDiv2();
								AddElementDiv3();
								AddElementDiv5();
								AddElementDiv7();
								AddElementDiv8();
								AddElementDiv12();
								RemoveElementDiv1();
								RemoveElementDiv4();
								RemoveElementDiv6();
								RemoveElementDiv9();
								RemoveElementDiv10();
								RemoveElementDiv11();
								} 
					//HYBRID
							if	(fonctionChoice_dropMenu() === 4)	{				
								AddElementDiv2();
								AddElementDiv3();
								AddElementDiv4();
								AddElementDiv5();
								AddElementDiv8();
								AddElementDiv9();
								AddElementDiv12();
								RemoveElementDiv1();
								RemoveElementDiv6();
								RemoveElementDiv7();
								RemoveElementDiv10();
								RemoveElementDiv11();
								}

								document.getElementById("qty_Pop").value = "";															  
								document.getElementById("qty_Appart").value = ""; 
								document.getElementById("qty_Base").value = ""; 
								document.getElementById("qty_Business").value = "";
								document.getElementById("qty_Eleva").value = "";								
								document.getElementById("qty_Level").value = "";
								document.getElementById("qty_loan").value = ""; 								
								document.getElementById("qty_Parking").value = "";								
								document.getElementById("qty_Hours").value = ""; 
								document.getElementById("returned_qty_Eleva").value = "";
								document.getElementById("hybrid").value = "";		
								document.getElementById("returned_qty_ElevaB").value = "";												
						}
	
	