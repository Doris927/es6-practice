function test(number){
	if(number == 0 || number == 1 || number == 2)
		return true;
	for(let i = 2 ; i < number; i++ ){
		if( number%i == 0 ){
			return false;
		}
	}
	return true;
}