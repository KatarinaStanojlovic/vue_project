<template>
  <div class="form-group col">
    <label :for="name">{{ label }}</label>
    <input :id="name" :name="name" :value="value" :type="type" @input="updatedValue" :required="required" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
    data(){
            return{
                localValue: ''
            }
        },
  props: {
    id: {
      type: String,
      required: true,
            },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
   methods: {
            updatedValue(event){
                this.localValue= event.target.value;
                this.$emit('updatedValue', this.localValue)
            }
        }
};
</script>
