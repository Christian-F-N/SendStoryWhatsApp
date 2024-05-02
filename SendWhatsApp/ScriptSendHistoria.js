async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No existe una conversación abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`


Historia 1

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
Solo seis meses no es muy poco?
Padre franciscano 3:
deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 2

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 3

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 4
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 5
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 6
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 7
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 8
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 9

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 10

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 11

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 12

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 13

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 14
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 15
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 16
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 17
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 18
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 19
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 20
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 21
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 22
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 23
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 24
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 25

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 26

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 27

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 28

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 29

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 30
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 31

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 32
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 33

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 33

ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.

Historia 34
ESCENA 1
Padre Franciscano2: 
Padres, reunámonos, 
necesitamos hablar.
Padre franciscano 1: 
Necesitamos construir una iglesia en la ciudad de Quito. 
La gran iglesia de San Francisco. 
¿A quién será que deberíamos poner a cargo esta obra? 
Padre franciscano 2: 
Yo conozco a un hombre que es muy famoso por las calles por sus grandes obras. 
Padre franciscano 3: 
tal vez hablas de Cantuña? Padre franciscano2:
 sí, ese mismo, ¿lo conoces?
Padre franciscano3: no,
 pero puedo buscarlo para que esté a cargo de la obra
Padre franciscano 1:
 Listo el será el encargado le pagaremos una razonable cantidad de dinero, pero... solo tendrá seis meses para cumplir con la obra. 
Padre franciscano 2:
 Solo seis meses no es muy poco?
Padre franciscano 3:
 deberíamos otorgar más tiempo, la iglesia no estará lista en seis meses.
Padre franciscano 1: 
Solo seis meses tendrá de lo contrario no recibirá ni un centavo de nuestra parte. 
Escena 2
Los padres fueron en busca de Cantuña por todas las calles de quito y cuando lo encontraron...
Padres franciscanos 
(busca a Cantuña por las calles de quito y lo encuentra en una calle)
Padre Franciscano2:
 Disculpa, ¿eres el famoso Cantuña del que tanto hablan?
Cantuña: 
Sí. Buenos días, ¿qué se le ofrece? 
Padre franciscano 1: 
Tenemos una tarea muy importante para ti.
Cantuña: ¿Una tarea?
Padre franciscano 1:
 Sí, necesito que construyas la gran iglesia de San Francisco.
Cantuña: 
¿Y qué me darían a cambio por tan gran obra?.
Padre franciscano 3: 
Te daremos una gran cantidad de dinero la cual podrás gozar como desees.
Cantuña: 
Listo. Acepto.
Padre franciscano 3: 
Muy bien, pero... 
te informo que tendrás que terminar la obra en seis meses si no el pago no será hecho.
Cantuña: Mmm, bueno, 
en seis meses estará hecho.Cantuña sabía que seis meses era muy poco, pero al parecer acepto el trato…
Escena 3
Cantuña comenzó a construir la gran iglesia de San Francisco. 
Los seis meses ya estaban llegando a su fin y aun Cantuña no terminaba tan gran obra. 
Solo lequedaban 2 días. Uno de los franciscanos lo visitó para ver cómo la obra iba.
Padre Franciscano2: 
¡Cantuña! vine a ver cómo iba la gran obra, 
y al parecer tefalta demasiado, no creo que lo logres. 
¡Te quedan 2 días! Sino lo terminas a tiempo olvídate de recibir algún centavo de nuestra parte. 
Cuánto el padre Franciscano fue Cantuña cayó de la angustia, 
tanta era su angustia que se le apareció el Diablo con su diablillo y dijo... 
Diablo: 
¡Cantuña! Aquí estoy para ayudarte. 
Conozco tu angustia y desesperación. 
Te ayudaré a terminar de construir la iglesia, 
poner hasta la última piedra en tan gran obra antes de que pasen los últimos 2 días finales. 
Cantuña: 
¡Qué! 
¿Cómo lograrás terminarla tan rápido? 
Diablillo:
 (ayuda a levantar a Cantuña) Diablo: Tú tranquilo, eso déjamelo a mí... 
Pero si te digo que mi ayuda tendrá un costo.
Cantuña: 
¿Qué? De que estamos hablando...Diablillo: Tu alma.
Cantuña: 
¡No! ¡Jamás! Diablo: Entonces, la iglesia no se terminará y no recibirás tu pago. 
Cantuña: 
¡No! Está bien, lo haré.
Escena 4
El diablo y sus diablillos se encargaban de la obra... 
colocaban piedra por piedra y formaban columnas para sostener la gran iglesia 
mientras tanto Cantuña en ese proceso dijo dentro de sí mismo. 
Cantuña:
No puedo dejar que se lleve mi alma. Así de fácil Y diablo y los diablillos terminaron la gran obra... 
pero Cantuña muy sigilosamente saco una piedra de la construcción antes que venga el diablo.
Diablo:
Listo eh cumplido con mi parte Cantuña termine la obra... 
ahora tu almaes mía 
Cantuña (voz tímida): 
Espera ¡El trato ha sido incumplido! Me ofreciste colocar hasta la última piedra de la construcción y no fue así. 
Falta una piedra
Diablo: 
¡COMO! No, no es posibleCantuña pone la última piedra en la construcción
Cantuña: La última piedra la coloque yo... 
así que no cumpliste el trato por completo
Diablo: 
¡Como te atreves a burlarte de mí...
un simple mortal como tu... 
te maldigoo! 
El diablo desapareció como humo regresando a las profundidades del infierno. 
Así Cantuña salvo su alma y termino la iglesia de San Francisco.
Después los franciscanos visitaron a Cantuña y al ver la obra finalmente construida cumplieron con su parte y le pagaron lo acordado.

FIN.
`).then(e => console.log(`Código finalizado, ${e} mensajes enviados`)).catch(console.error)



