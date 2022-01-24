import axios from "axios";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  count = 0;
  items = ["Hola", "Adios"];
  fact = "";
  mounted(): void {
    console.warn("component mounted");
    this.getFact();
  }

  add(message?: string): number {
    console.log("add");
    console.log("message", message);
    this.count++;
    return this.count;
  }

  getFact(): void {
    axios.get("https://catfact.ninja/fact").then((resp) => {
      console.warn("resp", resp);
      this.fact = resp.data.fact;
    });
  }
}
