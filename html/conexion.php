<?php



 function base_proyectos() //Conectamos con la base de datos de proyectos
{
	$serverName = "real"; 
	$uid = "adm35";   
	$pwd = "adm35";  
	$databaseName = "proyectos"; 
	 
	$connectionInfo = array( "UID"=>$uid,                            
							 "PWD"=>$pwd,                            
							 "Database"=>$databaseName,
							 "ReturnDatesAsStrings" =>1); //"ReturnDatesAsStrings" =>1 funcion para que NO me devuelva el datetime como objeto y sea legible  
	  
	
	$id_con = sqlsrv_connect( $serverName, $connectionInfo);  
	if( $id_con )
	{
	//   echo "Establecida la coneccion";
	}
	else
	{
	 echo "NOOOOOOOOO conecto a: ".$databaseName;
	 echo'<pre>';
	 print_r(sqlsrv_errors());
	 echo'<pre>';
	}	
 	return $id_con;
}

 function base_scamaeg() //Conectamos con la base de datos de scamae_g
{
	$serverName = "real"; 
	$uid = "adm35";   
	$pwd = "adm35";  
	$databaseName = "Scamae_G"; 
	 
	$connectionInfo = array( "UID"=>$uid,                            
							 "PWD"=>$pwd,                            
							 "Database"=>$databaseName,
							 "ReturnDatesAsStrings" =>1); //"ReturnDatesAsStrings" =>1 funcion para que NO me devuelva el datetime como objeto y sea legible  
	  
	
	$id_con = sqlsrv_connect( $serverName, $connectionInfo);  
	if( $id_con )
	{
	//   echo "Establecida la coneccion";
	}
	else
	{
	 echo "NOOOOOOOOO conecto a: ".$databaseName;
	 echo'<pre>';
	 print_r(sqlsrv_errors());
	 echo'<pre>';
	}	
 	return $id_con;
}

function base_entmail() //Conectamos con la base de datos de proyectos
{
	$serverName = "real"; 
	$uid = "adm35";    
	$pwd = "adm35";  
	$databaseName = "gaci35"; 
	 
	$connectionInfo = array( "UID"=>$uid,                            
							 "PWD"=>$pwd,                            
							 "Database"=>$databaseName,
							 "ReturnDatesAsStrings" =>1); //"ReturnDatesAsStrings" =>1 funcion para que NO me devuelva el datetime como objeto y sea legible  
	  
	
	$id_con = sqlsrv_connect( $serverName, $connectionInfo);  
	if( $id_con )
	{
	//   echo "Establecida la coneccion";
	}
	else
	{
	 echo "NOOOOOOOOO conecto a: ".$databaseName;
	 echo'<pre>';
	 print_r(sqlsrv_errors());
	 echo'<pre>';
	}	
 	return $id_con;
}

function db_relevamiento() //Conectamos con la base de datos de proyectos
{
	$serverName = "real"; 
	$uid = "adm35";    
	$pwd = "adm35";  
	$databaseName = "proyectos"; 
	 
	$connectionInfo = array( "UID"=>$uid,                            
							 "PWD"=>$pwd,                            
							 "Database"=>$databaseName,
							 "ReturnDatesAsStrings" =>1); //"ReturnDatesAsStrings" =>1 funcion para que NO me devuelva el datetime como objeto y sea legible  
	  
	
	$id_con = sqlsrv_connect( $serverName, $connectionInfo);  
	if( $id_con )
	{
	//   echo "Establecida la coneccion";
	}
	else
	{
	 echo "NOOOOOOOOO conecto a: ".$databaseName;
	 echo'<pre>';
	 print_r(sqlsrv_errors());
	 echo'<pre>';
	}	
 	return $id_con;
}

?>