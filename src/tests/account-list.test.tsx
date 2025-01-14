import {
  renderRoot,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent,
  within,
} from "./utils";

import accounts from "../../db/accounts";
import { server } from "./mocks/server";
import { failedAccountsRequest } from "./mocks/handlers";
import { formatNumber } from "../utils/helper";

test("renders loading spinner while GET '/accounts' is in progress", async () => {
  renderRoot();
  await waitFor(() => screen.getByLabelText("Loading..."));
});

// test("renders accounts when GET '/accounts' succeeds with records", async () => {
//   renderRoot();

//   await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

//   accounts.forEach((account) => {
//     const accountName = screen.getByText(RegExp(account.name, "i"));
//     // const accountBalance = screen.getByText(RegExp(account.balance, "i"));
//     // console.log(formatNumber(account.balance))
//     // const accountBalance = screen.getByRole("heading", { name: RegExp(formatNumber(account.balance), "i") });
//     const formattedBalance = formatNumber(account.balance);
//     const accountBalance = screen.getByText(formattedBalance, { exact: true });

//     expect(accountName).toBeInTheDocument();
//     expect(accountBalance).toBeInTheDocument();
//   });
// });

test("renders accounts when GET '/accounts' succeeds with records", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  accounts.forEach((account) => {
    const accountContainer = screen.getByTestId(`account-${account.id}`);

    const accountName = within(accountContainer).getByText(RegExp(account.name, "i"));

    const accountBalance = within(accountContainer).getByText(formatNumber(account.balance), { exact: true });

    expect(accountName).toBeInTheDocument();
    expect(accountBalance).toBeInTheDocument();
  });
});

test("shows 'Network error' when GET'/accounts' fails", async () => {
  server.use(failedAccountsRequest);

  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  const errorMessage = await screen.findByText(/Network error/i);
  const tryButton = await screen.findByText(/try again/i);

  expect(errorMessage).toBeInTheDocument();
  expect(tryButton).toBeInTheDocument();
});

test("makes request when 'Try again' button is clicked on error for GET'/accounts'", async () => {
  server.use(failedAccountsRequest);

  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  const errorMessage = await screen.findByText(/Network error/i);
  const tryButton = await screen.findByText(/try again/i);

  expect(errorMessage).toBeInTheDocument();
  expect(tryButton).toBeInTheDocument();

  fireEvent.click(tryButton);

  expect(await screen.findByLabelText("Loading...")).toBeInTheDocument();
});
