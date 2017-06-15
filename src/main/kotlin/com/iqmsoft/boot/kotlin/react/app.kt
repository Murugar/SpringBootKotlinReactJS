package com.iqmsoft.boot.kotlin.react

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.time.OffsetDateTime
import java.util.concurrent.atomic.AtomicLong
import org.springframework.beans.factory.annotation.Autowired

@SpringBootApplication
open class Application {

}

@RestController
open class AppController {

    private val counter = AtomicLong()
	
	@Autowired
	lateinit var helloService : HelloService
	
	@Autowired
	lateinit var twoService : TwoService

    @GetMapping("/api/hello")
    fun hello() = mapOf(
            "name" to helloService.hello() + " World",
            "counter" to counter.getAndIncrement().toString(),
            "timestamp" to OffsetDateTime.now().toString(),
			"service" to "Kotlin Service " + twoService.two()
    )

}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}
