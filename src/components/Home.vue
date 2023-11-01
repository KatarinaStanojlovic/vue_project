<template>
<div class="container">
     <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark  container">
        <div class="col-md-6 px-0 justify-content-center">
          <h1 class="display-4 font-italic">Thinking of getting a cat?</h1>
          <p class="lead my-3">Happy healthy cats require good owner knowledge and understanding. Find everything about keeping your cat happy, healthy and safe.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold"></a></p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">New</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Find a Vet</a>
              </h3>
              <div class="mb-1 text-muted">Sept 7</div>
              <p class="card-text mb-auto">The Positive Pet Care Guide, developed through an industrywide collaboration, helps companion animal practices foster healthy communication and strong partnerships with pet owners.</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" src="vet.jpg">
          </div>
        </div>
        <div class="col-md-6">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">Popular Advices</a>
              </h3>
              <div class="mb-1 text-muted">Jun 11</div>
              <p class="card-text mb-auto">Cat pregnancy and birth.</p>
                <p class="card-text mb-auto">Fleas and flea control in cats</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block"  alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" src="cat.jpg" >
          </div>
        </div>
      </div>
    </div>

  
</template>
<script>
export default {
    name:"HomeComp"
}
</script>