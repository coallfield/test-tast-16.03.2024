import FormBuilder from "@/components/FormBuilder.vue";
import { describe, it, expect } from "vitest";

describe('startAttention', () => {
    it('switch to true first, then to false', () => {
      const form = {
        formData: {
          attention: false
        } 
      };
      FormBuilder.methods.startAttention(form.formData, 'attention');
      expect(form.formData.attention).toBe(true);
      setTimeout(() => {
        expect(form.formData.attention).toBe(false);
        done()
      }, 1000);

    });
  });