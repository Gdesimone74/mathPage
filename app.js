var derivada = $('.derivada')
var integral = $('.integral')
var factorial = $('.factorial')
var interseccion = $('.interseccion')
var valor = $('.valor')

derivada.click(function() {
  $(document).ready(function() {
    var urlApi = `https://newton.now.sh/derive/${valor.val()}`

    $.ajax({
      url: urlApi,
      success: function(data) {
        console.log(data.result)
        $('h1.resultado').text(`${data.result}`)
      },

      error: function(error) {
        console.error(error)
      }
    })
  })

  console.log(valor.val())
})

integral.click(function() {
  $(document).ready(function() {
    var urlApi = `https://newton.now.sh/integrate/${valor.val()}`

    $.ajax({
      url: urlApi,
      success: function(data) {
        console.log(data.result)
        $('h1.resultado').text(`${data.result}`)
      },

      error: function(error) {
        console.error(error)
      }
    })
  })

  console.log(valor.val())
})

factorial.click(function() {
  $(document).ready(function() {
    var urlApi = `https://newton.now.sh/factor/${valor.val()}`

    $.ajax({
      url: urlApi,
      success: function(data) {
        console.log(data.result)
        $('h1.resultado').text(`${data.result}`)
      },

      error: function(error) {
        console.error(error)
      }
    })
  })

  console.log(valor.val())
})

interseccion.click(function() {
  $(document).ready(function() {
    var urlApi = `https://newton.now.sh/factor/${valor.val()}`

    $.ajax({
      url: urlApi,
      success: function(data) {
        console.log(data.result)
        $('h1.resultado').text(`${data.result}`)
      },

      error: function(error) {
        console.error(error)
      }
    })
  })

  console.log(valor.val())
})
