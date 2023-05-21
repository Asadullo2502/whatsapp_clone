import useAuthStore from 'src/modules/auth/store';
import { Services } from 'src/services';
import { IMain } from 'src/types';

export class Main implements IMain {
  services = new Services();
  authStore = useAuthStore;

  protected searchParams() {
    return Object.fromEntries(
      new URLSearchParams(window.location.search).entries()
    );
  }

  public getFormValues(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((element) => {
      const input = element as HTMLInputElement;
      return element?.tagName === 'INPUT' && input?.name;
    }) as HTMLInputElement[];

    const formData = inputs.reduce((data, input) => {
      if (input.value.trim() !== '') {
        data[input.name] = input.value;
      }
      return data;
    }, {} as { [key: string]: string });

    return formData;
  }
}
